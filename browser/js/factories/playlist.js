app.factory('PlaylistFactory', function ($http) {

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.fetchByID = function (id) {
        return $http.get('/api/playlists/' + id)
        .then(function (response) {
            return response.data;
        })
        .then(function(playlist){
            return playlist;
        });
    };

    PlaylistFactory.addSong = function(playlist, song){
        return $http.post('api/playlists/' + playlist + '/songs', {'song': song})
        .then(function(response){
            return response.body;
        })
    }

    return PlaylistFactory;

});