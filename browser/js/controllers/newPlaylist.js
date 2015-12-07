app.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
	$scope.newPlaylist = function(name){
		var returnObj = {};
		returnObj.name = name;
		console.log(returnObj);
		PlaylistFactory.create(returnObj)
	}

	$scope.getPlaylists = function () {
		PlaylistFactory.fetchAll()
 		.then(function(result){
 			console.log(result);
 			$scope.playlists = result;
 		});
 	};
 	$scope.getPlaylists();
});