'use strict';

// Initial URL to share.  
// But really do we need a directive??

/*
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
*/

