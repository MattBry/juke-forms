app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $state, SongFactory) {
	$scope.newPlaylist = function(name){
		var returnObj = {};
		returnObj.name = name;
		var createdPlaylist = PlaylistFactory.create(returnObj);
		$state.go('Playlist', { "playlistId" : createdPlaylist._Id });
	};

	$scope.getPlaylists = function () {
		PlaylistFactory.fetchAll()
 		.then(function(result){
 			$scope.playlists = result;
 		});
 	};

 	$scope.getSongs = function(){
 		SongFactory.fetchAll()
 		.then(function(result){
 			$scope.songs = result;
 		})
 	}

 	$scope.addSong = PlaylistFactory.addSong

 	$scope.getSongs()
 	$scope.getPlaylists();
});