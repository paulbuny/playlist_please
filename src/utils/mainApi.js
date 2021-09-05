class SpotifyApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _getResponseStatus (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  getCurrentUserPlaylists (token) {
    return fetch(`${this._baseUrl}/v1/me/playlists`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => this._getResponseStatus(res));
  }

  getPlaylist (token, playlistId) {
    return fetch(`${this._baseUrl}/v1/playlists/${playlistId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => this._getResponseStatus(res));
  }

  getListOfPlaylistsTracks (token, playlistId) {
    return fetch(`${this._baseUrl}/v1/playlists/${playlistId}/tracks`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => this._getResponseStatus(res));
  }
}

const spotifyApi = new SpotifyApi({
  baseUrl: 'https://api.spotify.com',
})

export default spotifyApi;