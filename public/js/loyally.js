'use strict';

// Initial URL to share.  
// Todo - Replace this with $location

function ShareCtrl($scope, $location) {
	//$scope.url="http://localhost/~Mark/myblog.com";
	$scope.url = location;
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

