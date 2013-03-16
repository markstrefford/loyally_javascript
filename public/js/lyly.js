/**
 * Created with JetBrains WebStorm.
 * User: markstrefford
 * Date: 30/01/2013
 * Time: 20:19
 * To change this template use File | Settings | File Templates.
 *
 * This version is called server side (typically from a POST to /share_fb_url) and requires the following:
 *
 * lyMd - N/A (client side)
 * lyFbA - N/A (client side)
 * _goUrl - URL to redirecting to (typically locally.me/go/..... )
 * schemeKey - UUID for the scheme
 * domain - Domain related to the scheme key
 *
 * The following are to detail of the page to be published to Facebook
 *
 * title - Page title
 * caption - Page caption
 * image - Page image
 * url - URL of page
 * description - Description of page
 *
 */

// Only call FB.init if its needed later on...
FB.init({appId: "518644834829463", status: true, cookie: true});

function postToFeed(url) {
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
                    var caption = title;
                    // if ( description == null) { description = ""};
                    //if ( image == null ) { image = "http://www.mouserunner.net/Index_Graphics/Free_Graphics_Logo.png"};
                    console.log("Image URL = " + image);
                    /*
                        Handle post to Facebook feed
                     */

                        // Use FB API (only works if FB appId is configured for this domain
                        var obj = {
                            method: 'feed',
                            //redirect_uri: 'http://loyally.local/~markstrefford/myblog.com/thankyou.html',
                            link: _goUrl + token,
                            picture: image,
                            name: title,
                            caption: caption,
                            description: description

                        }
                        console.log(obj);
                        function callback(response) {
                            //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
                            // TODO - Provide a better message here??
                            //document.getElementById('msg').innerHTML = "Thank you for sharing!";
                            // Redirect to thank you page!!!
                            console.log("URL shared on FB: Redirecting back to " + url);
                            window.location.assign(url);
                        }
                        FB.ui(obj, callback);

            }
    }

    /*
        Handle facebook login as required
     */

    // Setup some default values
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
                //var postUrl = _lyServer + "/api/v01/share/register_url";
                var postUrl = _lyServer + "/api/v01/share/register_url";
                console.log("About to POST to " + postUrl);
                xmlhttp.open("POST",postUrl);
                xmlhttp.setRequestHeader("Content-Type", "application/json");
                var jsonRequest=JSON.stringify({
                    "url" : url,
                    "facebook_id" : fbId,
                    "facebook_name" : fbName,
                    "facebook_email" : fbEmail,
                    "scheme" : lyId
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
    console.log("Page loaded - ready to post " + url + " to Facebook!!");
    postToFeed(url);
})

