'use strict';

// Initial URL to share.  
// But really do we need a directive??

function ShareCtrl($scope, $location, Share) {
	//$scope.url = location + "?shareID=1234";
	//$scope.url = location + Share.get({Id: 1234567899});
	// Todo - Get this from Facebook
	var facebookId = 123456789;

	// Get a URL identified from the loyally JSon API
	var shareID = Share.get({shareId: facebookId}, function(share) {
		console.log("shareID returned : " + shareID);
		//scope.$watch(attrs, shareID, function(url) {
		if ( !shareID ) {
			$scope.url = location + "?shareID=" + shareID;
		} else {
			$scope.url = location + "?shareId=0";
		}
		//});
	}); 

}



function ShareCtrlFb($scope, $location) {


    FB.init({appId: "518644834829463", status: true, cookie: true});
    function postToFeed() {

        // Setup a unique ID
        var uniqueID = 123456789;

        // calling the API ...
        // redirect_uri is where Facebook redirects to.  Plan is to redirect to loyally to register the unique ID and then
        // loyally will redirect the user back to the thank you page or whatever
        var obj = {
            method: 'feed',
            redirect_uri: 'http://localhost:9000/share?uniqueID=' + uniqueID + '&redirect=http://localhost/~markstrefford/myblog.com',
            link: 'http://localhost/~markstrefford/myblog.com?uniqueID=' + uniqueID,
            picture: 'http://fbrell.com/f8.jpg',
            name: 'Facebook Dialogs',
            caption: 'Reference Documentation',
            description: 'Using Dialogs to interact with users.'
        };

        function callback(response) {
            document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }

        FB.ui(obj, callback);
    }


}