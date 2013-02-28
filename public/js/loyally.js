/**
 * Created with JetBrains WebStorm.
 * User: markstrefford
 * Date: 30/01/2013
 * Time: 20:19
 * To change this template use File | Settings | File Templates.
 */

//FB.init({appId: "518644834829463", status: true, cookie: true});
//FB.init({appId: lyFbId, status: true, cookie: true});
FB.init({appId: "518644834829463", status: true, cookie: true});

function postToFeed() {

    // Get the ShareID from loyally.com

    // Based on http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
    // and http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_first

    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        console.log("Setting up XMLHttpRequest()")
        xmlhttp=new XMLHttpRequest();
    }
    // Removed code for IE5/6

    xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    var jsonResponse=JSON.parse(xmlhttp.responseText);
                    var clickUrl = jsonResponse.clickUrl;
                    console.log("Returned URL from Json = " + clickUrl);
                    var title = document.title;
                    var caption = document.getElementsByTagName('h1')[0]; if ( caption == null) { caption = title } else { caption = caption.innerHTML };
                    var description = document.getElementsByTagName('p')[0]; if ( description == null) { description = caption} else { description = description.innerHTML.substr(1,120)+"..."};
                    var image = document.getElementsByTagName('img')[0]; if ( image == null ) { image = "http://www.mouserunner.net/Index_Graphics/Free_Graphics_Logo.png"};
                    var obj = {
                            method: 'feed',
                            //redirect_uri: 'http://loyally.local/~markstrefford/myblog.com/thankyou.html',
                            link: clickUrl,
                            picture: image,
                            name: title,
                            caption: caption,
                            description: description
                    };

                    function callback(response) {
                        //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
                        // TODO - Provide a better message here??
                        document.getElementById('msg').innerHTML = "Thank you for sharing!";
                    }

                    FB.ui(obj, callback);
            }
    }


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
                var jsonRequest=JSON.stringify({"url" : window.location.href,
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

// When a page of this site loads, we want to see if there is a ?shareID=nnnnn value and post this back to loyally
//
// From http://stackoverflow.com/questions/65434/getting-notified-when-the-page-dom-has-loaded-but-before-window-onload

function loadPageVar (sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

$(document).ready ( function() {
    console.log("Page loaded - Checking if this is some loyally activity!!");
    var url = window.location.href;
    console.log("Current page URL is " + url);

    // From https://developer.mozilla.org/en-US/docs/DOM/window.location#Location%5Fobject
    //var oGetVars = {};

if (window.location.search.length > 1) {
    // Probably use this later to keep all other search values in URL
    //for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
    //    aItKey = aCouples[nKeyId].split("=");
    //    oGetVars[unescape(aItKey[0])] = aItKey.length > 1 ? unescape(aItKey[1]) : "";
    //}
var shareID = loadPageVar("shareID");
console.log("Found shareID : " + shareID);
} else {
    console.log("No shareID specified on this page");
    }

//console.log("Found shareID : " + oGetVars.shareID);

// Now remove shareID from URL and redirect just to main URL
// http://www.w3schools.com/js/js_window_location.asp
// TODO - This currently removes all parameters after the "?" so needs to work better!!!
if (shareID != null) {
    var locationend = url.indexOf('?');
    var new_url = url.substr(0, locationend);

    // Fire off the loyally webservice call here!!!
    var xmlhttpget;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    console.log("Activity: Setting up XMLHttpRequest()")
    xmlhttpget=new XMLHttpRequest();
    }

// Removed code for IE5/6
console.log("About to call xmlhttp.onreadystatechange() for Activity")
xmlhttpget.onreadystatechange=function() {
    console.log("Now checking for xmlhttp.readyState==4 and xmlhttp.status=200");

    if (xmlhttpget.readyState==4 && xmlhttpget.status==200) {
    console.log("readystate=4 and status=200!!");
    console.log("So activity recorded!!");
    }
}

console.log("About to do a GET to http://loyally.local:9000/api/v01/share/activity/" + shareID);
xmlhttpget.open("GET", "http://loyally.local:9000/api/v01/share/activity/" + shareID, true);
xmlhttpget.send();
console.log("Done our GET to http://loyally.local:9000/api/v01/share/activity/" + shareID);


console.log("Activity: Redirecting to " + new_url);
window.location.assign(new_url);

}

})

