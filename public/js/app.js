'use strict';

/* App Module */

/* For shareID and json service */

/* angular.module('share', ['shareServices', 'ngCookies']); */


/* From http://jsfiddle.net/ggmRQ/9/ */

var app = angular.module('fbApp', []);

app.run(function($rootScope, Facebook) {
    $rootScope.Facebook = Facebook;
})

app.factory('Facebook', function() {

    var self = this;
    this.auth = null;

    return {

        getAuth: function() {
            return self.auth;
        },

        login: function() {

            FB.login(function(response) {
                if (response.authResponse) {
                    self.auth = response.authResponse;
                } else {
                    console.log('Facebook login failed', response);
                }
            })

        },

        logout: function() {

            FB.logout(function(response) {
                if (response) {
                    self.auth = null;
                } else {
                    console.log('Facebook logout failed.', response);
                }

            })

        }

    }

})










window.fbAsyncInit = function() {
    FB.init({
       // appId: '467875209900414'
        appId: '518644834829463'
    });
};

angular.bootstrap(document, ['fbApp']);

// Load the SDK Asynchronously
(function(d) {
    var js, id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));





























