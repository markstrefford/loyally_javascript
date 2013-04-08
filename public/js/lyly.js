/**
 * Created with JetBrains WebStorm.
 * User: markstrefford
 * Date: 30/01/2013
 * Time: 20:19
 * To change this template use File | Settings | File Templates.
 *
 * This version is called server side (after a successful dialog post to FB and is called from /share_fb_url).
 * It requires the following:
 *
 * _lyToken - token from shared URL
 *
 */

// Only call FB.init if its needed later on...
FB.init({appId: "518644834829463", status: true, cookie: true});

function postToLyly(token) {
    // Get server name (helps work with prod or dev here!!)
    var _lyServer = "http://" + window.location.hostname;
    if ( window.location.hostname == "loyally.local" ) { _lyServer = _lyServer + ":9000" }
    console.log(_lyServer);


    // Based on http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
    // and http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_first

    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        console.log("Setting up XMLHttpRequest()")
        xmlhttp=new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    var jsonResponse=JSON.parse(xmlhttp.responseText);
                    console.log(jsonResponse);
                    var token = jsonResponse.token;
                    console.log("Returned URL from Json = " + _goUrl + token);
                    //var title = document.title;
                    console.log("Finishing for now, but should really close the window!!!");
            }
    }

    /*
        Handle facebook login as required
     */

    // Setup some default values - FB should always pass this as the user is logged in to do the successful post???
    var fbId=0;
    var fbName="NOT_AUTHORISED";
    var fbEmail="NOT_AUTHORISED";
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  FB.api is fetching your information.... ');
            FB.api('/me', function(response) {
                fbId = response.id;         //console.log("login/FB.id:"+fbId);
                fbName = response.name;     //console.log("login/FB.name:"+fbName);
                fbEmail = response.email;   //console.log("login/FB.email:"+fbEmail);

                /* Now updated loyally with the users FB details */

                //var postUrl = _lyServer + "/api/v01/share/register_url";
                var postUrl = _lyServer + "/api/v01/share/register_url";
                console.log("About to POST to " + postUrl);
                xmlhttp.open("POST",postUrl);
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                var jsonRequest=JSON.stringify({
                    "token" : token,
                    "facebook_id" : fbId,
                    "facebook_name" : fbName,
                    "facebook_email" : fbEmail
                });
                console.log('Now lets call loyally() with json ' + jsonRequest);
                xmlhttp.send(jsonRequest);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
            // TODO - What to do if not authorised???
            // TODO - Alert box perhaps?  "You need to log in to share on Facebook" ??
        }
    }, {scope: 'email'});

}

/*

    When a page of this site loads, we want to see if there is a ?shareID=nnnnn value and post this back to loyally


  */

// From http://stackoverflow.com/questions/65434/getting-notified-when-the-page-dom-has-loaded-but-before-window-onload

$(document).ready ( function() {
    console.log("Page loaded - ready to update share " + _lyToken + " with Facebook user details!!");
    postToLyly(_lyToken);
})

