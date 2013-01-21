/* 'use strict'; */

/*
 * Services for calling back to loyally
 * 
 */



angular.module('shareServices', ['ngResource']).
factory('Share', function($resource){
	console.log("shareService : calling share/:facebookId.json with Id 1234567899");
	return $resource('api/v01/share/:shareId.json', {}, {
		query: {method:'GET', params:{shareId:'share'}, isArray:true}
	});
});




