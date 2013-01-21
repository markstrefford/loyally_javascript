'use strict';

/* App Module */

/* For shareID and json service */

/* angular.module('share', ['shareServices', 'ngCookies']); */


/*
 * Code based on https://groups.google.com/forum/#!msg/angular/bxojrdHLQfk/9W-iieow5WUJ and
 * http://jsfiddle.net/ggmRQ/9/
 */

var app = angular.module('fbApp', []);


function FbNameCtrl($scope, Facebook) {
    // $scope.name = "Mark";
    $scope.name = Facebook.name;

};


app.run(function($rootScope, Facebook) {
    $rootScope.Facebook = Facebook;
})



app.factory('Facebook', function() {

    var self = this;
    this.auth = null;

    // my additions...
    this.name = null;

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
        },

        // Get name of user
        getName: function() {
            console.log("getName() called...")
            FB.api('/me', function(response) {
                self.name = response.name;
                self.id = response.id;

                console.log('getName Facebook.name welcomes ' + self.name);
                console.log('getName Facebook.Id is ' + self.id);
            });
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





























