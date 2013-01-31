/**
 * Created with JetBrains WebStorm.
 * User: markstrefford
 * Date: 30/01/2013
 * Time: 20:19
 * To change this template use File | Settings | File Templates.
 */



FB.init({appId: "518644834829463", status: true, cookie: true});

function shareUrl() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  postToFeed() is fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
console.log('Now lets postToFeed()');
postToFeed();
} else {
    console.log('User cancelled login or did not fully authorize.');
    // TODO - What to do if not authorised???
    }
}, {scope: 'email'});
}



function postToFeed() {

    // Get the ShareID from loyally.com

    // Based on http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
    // and http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_first
    console.log("Start of postToFeed2()");

    var shareID;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    console.log("Setting up XMLHttpRequest()")
    xmlhttp=new XMLHttpRequest();
    }

// Removed code for IE5/6
console.log("About to call xmlhttp.onreadystatechange()")
xmlhttp.onreadystatechange=function()
                {
                    console.log("Now checking for xmlhttp.readyState==4 and xmlhttp.status=200");
                    if (xmlhttp.readyState==4 && xmlhttp.status==200)
                    {
                    console.log("readystate=4 and status=200!!")
                    // Get the shareID value from the Json response
                    // See http://stackoverflow.com/questions/4935632/how-to-parse-json-in-javascript
                    var jsonResponse=JSON.parse(xmlhttp.responseText),
                    shareID = jsonResponse.shareID;
                    console.log("Returned shareID from Json = " + shareID);
                    //shareID=xmlhttp.responseText;
                    var obj = {
                    method: 'feed',
                    redirect_uri: 'http://loyally.local/~markstrefford/myblog.com/thankyou.html',
                    link: 'http://loyally.local/~markstrefford/myblog.com/index.html?shareID=' + shareID,
                    picture: 'http://fbrell.com/f8.jpg',
                    name: 'Tennis over 40',
                    caption: 'Playing tennis for the over 40s',
                    description: 'Playing tennis is great, and really enjoyable if you are over 40!'
                    };

function callback(response) {
    document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
    }

FB.ui(obj, callback);
}
}

// TODO - Get this from Facebook API and add in name and email address.
xmlhttp.open("POST", "http://loyally.local:9000/api/v01/share/register_url");
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.send(JSON.stringify({"url" : "http://myblog.com/index.html",
    "facebook_id" : "711041406",
    "scheme" : lyId}));
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

