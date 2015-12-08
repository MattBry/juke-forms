app.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/templates/playlist-form.html',
		controller: 'PlaylistCtrl'
	}).state('Playlist',{
		url: 'playlists/:playlistId',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl'
	});
});