/**
 * Created with JetBrains WebStorm.
 * User: markstrefford
 * Date: 30/01/2013
 * Time: 20:19
 *
 * ----------------------------------------------------
 *
 * This JS provides the following client side functionality:
 *
 * - When the share button is clicked, call _lShare function
 * - Get relevant page data and call Loyally to get unique Share URL
 * - If lyFbA = 0 then redirect to Loyally to do Facebook sharing
 * - If lyFbA = 1 then share directly with Facebook (Note this requires an appId registered to this domain)
 *
 * - When page loads, check to see if it has a shareID appended to the URL. If so, remove it and inform loyally of a click
 *
 * Expects the following variables to be set in the calling web page:
 *
 * lyId - Scheme ID at loyally.me  (TODO - Replace this with scheme key)
 * lyMd - Create redirect URL (so clicking on shared link goes via Loyally.me) or appends shareID to the URL (Not used??)
 * lyFbA - Use Facebook API from here (1) , or callback to loyally.me (0) to make the Facebook API calls
 * lyDmn - Domain as registered with Loyally.me
 * _lyD - dev (1) or prod (0) mode (used for now until I can think of a better way!!)
 *
 */


// Client side loyally javascript

/*
 * Cookie handling
 *
 * From http://www.quirksmode.org/js/cookies.html
 */
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function setLoyallyCookie() {
    var cookie_name = "_id";
    var cookie_value = Math.random().toString(36);
    var cookie_expires = 2 * 365;  // Set expiry for 2 years in the future
    createCookie(cookie_name, cookie_value, cookie_expires);
}

/*
 * URL Sharing functionality
 */
function _lShare() {

    if (_lyD == 0) {
        var _lyServer = "http://beta.loyally.me";
    } else {
        var _lyServer = "http://loyally.local:9000";
        console.log("Development mode!!");
    }

    /*
     Get the ShareID from loyally.com
     */

    // Based on http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp
    // and http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_first


    if (lyFbA == 1) {
        // TODO - This probably all needs ripping out!!!

        if (_lyD == 1) {
            console.log("I'm here as we're calling FB directly!!");
        }
        FB.init({appId: "518644834829463", status: true, cookie: true});

        // Post to FB directly, so get shareURL from loyally first
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            if (_lyD == 1) {
                console.log("Setting up XMLHttpRequest()");
            }
            xmlhttp = new XMLHttpRequest();
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var jsonResponse = JSON.parse(xmlhttp.responseText);
                if (_lyD == 1) {
                    console.log(jsonResponse);
                }
                var token = jsonResponse.token;
                if (_lyD == 1) {
                    console.log("Returned URL from Json : " + _goUrl + token);
                }

                var title = document.title;
                if (title == null) {
                    title = "Sharing this page with you..."
                }
                var caption = document.getElementsByTagName('h1')[0];
                if (caption == null) {
                    caption = title
                } else {
                    caption = caption.innerHTML
                }
                ;
                var description = document.getElementsByTagName('p')[0];
                if (description == null) {
                    description = caption
                } else {
                    description = description.innerHTML.substr(1, 120) + "..."
                }
                ;
                var image = document.getElementsByTagName('img')[0];
                if (image == null) {
                    image = "http://www.mouserunner.net/Index_Graphics/Free_Graphics_Logo.png"
                }
                ;

                console.log("Sharing " + title);


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

                function callback(response) {
                    //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
                    // TODO - Provide a better message here??
                    document.getElementById('msg').innerHTML = "Thank you for sharing!";
                }

                FB.ui(obj, callback);
            }
            ;
        }

    } else {
        if (_lyD == 1) {
            console.log("** I'm here as we're calling loyally directly!! **");
        }

        var url = window.location.href;
        if (window.location.hash.length > 0) {
            url = url.split("#", 1);
            console.log("# found, so removed hash!!");
        }
        console.log(url);
        var title = document.title;
        if (title == null) {
            title = "Sharing this page with you..."
        }
        var caption = document.getElementsByTagName('h1')[0];
        if (caption == null) {
            caption = title
        } else {
            caption = caption.innerHTML
        }
        ;
        var description = document.getElementsByTagName('p')[0];
        if (description == null) {
            description = caption
        } else {
            description = description.innerHTML.substr(0, 80) + "..."
        }
        ;

        // Set a cookie so that we know not to count visits to this URL in the future as a click on a share (stops people clicking themselves to get lots of points!!)
        setLoyallyCookie();
        if (_lyD == 1) {
            console.log("Set loyally cookie as this URL has been shared by this browser with loyally.me!");
        }


        // TODO - Add in image handling here so that it can cater for relative URLs
        // var image = document.getElementById('img'); if ( image == null ) { image = "http://www.mouserunner.net/Index_Graphics/Free_Graphics_Logo.png"};
        var image = _lyServer + "/assets/img/share.jpg";

        // Now prepare what we need for sharing on FB
        var fbShareUrl = _lyServer + "/api/v01/share/fb/" +
            encodeURIComponent(lyId) + "/" +
            encodeURIComponent(lyDmn) + "/" +
            encodeURIComponent(url) + "/" +
            encodeURIComponent(title) + "/" +
            encodeURIComponent(caption) + "/" +
            encodeURIComponent(description) + "/" +
            encodeURIComponent(image);
        if (_lyD == 0) {
            // Open a new window for the /fb_share process and switch off toolbar and menubar.  For now we will allow location to be displayed
            window.open(fbShareUrl, '_blank', 'toolbar=0,location=1,menubar=0');
        } else {
            // In dev mode, use the same window so we can track URLs easier!!
            console.log("Redirecting to " + fbShareUrl);
            window.location.href = fbShareUrl;
        }
    }


}

function renderLoyallyButtons() {
    console.log("Getting elements by class name loyally");

    // Get all occurances of the loyally class
    var elements = document.getElementsByClassName("loyally"),
        n = elements.length;
    // Now loop through them
    for ( i=0 ; i < n; i++ ) {
        // Get next element
        var element = elements[i];
        elementClass = element.className;
        // Split out the list into an array
        var params = elementClass.split(" ");
        // If there is a 2nd parameter, then this is the action
        action = params[1]; console.log(action);
        if ( action === null ) {
            action = "share"
        }
        // Render the appropriate markup depending on the action defined
        switch (action) {
            case 'buy':
                // TODO - Need to check if this really works!! Not sure it is calling the JS???
                element.innerHTML = "<div onload='console.log(action);'></div>";
                break;
            default:
                element.innerHTML = "<a href=\"#\" onclick='_lShare()'; return false;'><img src=\"public/img/fbshare.png\" />&nbsp;Share on Facebook</a></p>";
        }

    }

}

/*

 When a page of this site loads, we want to see if there is a #nnnnn value and post this back to loyally


 */


$(document).ready(function () {
    console.log("Scheme " + lyId);

    renderLoyallyButtons();

    if (_lyD == 1) {
        console.log("Page loaded - Checking if this is some loyally activity for scheme " + lyId + "!!");
    }
    var url = window.location.href;
    if (_lyD == 1) {
        console.log("Current page URL is " + url);
    }

    // TODO - Make this more intelligent??
    if (_lyD == 0) {
        var _lyServer = "http://beta.loyally.me";
    } else {
        var _lyServer = "http://loyally.local:9000";
    }

    // Do we have a cookie?  If so, this browser has shared this specific domain before.  Therefore lets not count this click as an accrual!
    var value = readCookie("_id");
    if (value === null || _lyD == 1 ) {
        if (_lyD == 1) {
            console.log("Cookie _id not found so this URL wasn't shared by this browser / this is dev mode so we're ignoring the cookie - therefore log this view with loyally backend");
        }
        if (window.location.hash.length > 1) {

            var shareID = window.location.hash.substr(1, 15);
            if (_lyD == 1) {
                console.log("Found shareID : " + shareID);
            }
            // Fire off the loyally webservice call here!!!
            var xmlhttpget;

            if (window.XMLHttpRequest) {
                if (_lyD == 1) {
                    console.log("Activity: Setting up XMLHttpRequest()");
                }
                xmlhttpget = new XMLHttpRequest();
            }

            // Fire off the loyally webservice call here!!!
            var xmlhttpget;
            if (window.XMLHttpRequest) {
                if (_lyD == 1) {
                    console.log("Activity: Setting up XMLHttpRequest()");
                }
                xmlhttpget = new XMLHttpRequest();
                if (_lyD == 1) {
                    console.log("About to do a GET to " + _lyServer + "/api/v01/share/action/click/" + shareID);
                }
                xmlhttpget.open("GET", _lyServer + "/api/v01/share/action/click/" + shareID, true);
                xmlhttpget.send();
                if (_lyD == 1) {
                    console.log("Done our GET to " + _lyServer + "/api/v01/share/action/click/" + shareID);
                }

            }

            if (_lyD == 1) {
                console.log("About to call xmlhttp.onreadystatechange() for Activity");
            }
            xmlhttpget.onreadystatechange = function () {
                if (_lyD == 1) {
                    console.log("Now checking for xmlhttp.readyState==4 and xmlhttp.status=200");
                }

                if (xmlhttpget.readyState == 4 && xmlhttpget.status == 200) {
                    if (_lyD == 1) {
                        console.log("readystate=4 and status=200 so activity recorded!!");
                    }
                    // Set a cookie so that we know not to count visits to this URL again in the future as a click on a share (stops people clicking reload to get lots of points!!)
                    if (_lyD == 1) {
                        console.log("Setting loyally cookie as this view has been logged at loyally.me!");
                    }
                    setLoyallyCookie();
                }

            }

        } else {
            if (_lyD == 1) {
                console.log("No shareID found on this page, exiting...");
            }
        }
    }
})


