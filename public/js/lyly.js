/**
 * Created with JetBrains WebStorm.
 * User: markstrefford
 * Date: 30/01/2013
 * Time: 20:19
 * To change this template use File | Settings | File Templates.
 *
 * This version is called server side
 */

// Only call FB.init if its needed later on...
FB.init({appId: "518644834829463", status: true, cookie: true});

function postToFeed() {
    //if (lyFbA == 1) {FB.init({appId: "518644834829463", status: true, cookie: true})};

    /*
        Get the ShareID from loyally.com
      */

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
                    var clickUrl = jsonResponse.url;
                    console.log("Returned URL from Json = " + clickUrl);
                    //var title = document.title;
                    var caption = title;
                    if ( description == null) { description = caption} else { description = description.innerHTML.substr(1,120)+"..."};
                    if ( image == null ) { image = "http://www.mouserunner.net/Index_Graphics/Free_Graphics_Logo.png"};
                    /*
                        Handle post to Facebook feed
                     */

                        // Use FB API (only works if FB appId is configured for this domain
                        var obj = {
                            method: 'feed',
                            //redirect_uri: 'http://loyally.local/~markstrefford/myblog.com/thankyou.html',
                            link: clickUrl,
                            picture: image,
                            name: title,
                            caption: caption,
                            description: description

                        }
                        function callback(response) {
                            //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
                            // TODO - Provide a better message here??
                            document.getElementById('msg').innerHTML = "Thank you for sharing!";
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
                console.log('Welcome!  JsonCall() is fetching your information.... ');
                FB.api('/me', function(response) {
                   fbId = response.id;         //console.log("login/FB.id:"+fbId);
                   fbName = response.name;     //console.log("login/FB.name:"+fbName);
                   fbEmail = response.email;   //console.log("login/FB.email:"+fbEmail);
                    xmlhttp.open("POST", "http://loyally.local:9000/api/v01/share/register_url");
                    xmlhttp.setRequestHeader("Content-Type", "application/json");
                    var jsonRequest=JSON.stringify({"url" : url,
                            "facebook_id" : fbId,
                            "facebook_name" : fbName,
                            "facebook_email" : fbEmail,
                            "scheme" : lyId});
                    xmlhttp.send(jsonRequest);
                });
                console.log('Now lets call loyally()');
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

function loadPageVar (sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

$(document).ready ( function() {
    console.log("Page loaded - Checking if this is some loyally activity!!");
    var url = window.location.href;
    console.log("Current page URL is " + url);
    postToFeed();
})
