'use strict';

// Initial URL to share.  
// But really do we need a directive??

function ShareCtrl($scope, $location) {
	$scope.url = location + "?shareID=1234";
}








/*
 * THIS IS ALL UNUSED, BUT KEPT HERE FOR REFERENCE PURPOSES AND FOR IDEAS LATER !!!
 * 
 */
function ShareCtrl2($scope, $location) {
	//$scope.url="http://localhost/~Mark/myblog.com";
	$scope.url2 = location;
}

/* 
 * Create a URL with a unique 'share' extension
 * 
 * Option to convert this into a directive later, for example <span shareable>...</span>
 * 
 * Based on http://docs.angularjs.org/guide/directive
 */


angular.module('loyallyApp', [])
	.directive('shareUrl', function($parse) {
		return {
			link: function LinkFn(scope, lElement, attrs) {
				console.log("LinkingFn", scope, lElement, attrs, ")");
				scope.$watch(attrs.shareUrl, function(name) {
					lElement.text(name + "?shareId=1234");
				})
			}	
		}	
	})


