class SpotifyApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
    this._authUrl = 'https://accounts.spotify.com/api/token';
  }

  _getResponseStatus (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  login (clientId, clientSecret) {
    const token = window.btoa(`${clientId}:${clientSecret}`);

    let urlParams = new URLSearchParams();
    urlParams.append("grant_type", "client_credentials");

    return fetch(this._authUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlParams,
    })
    .then((res) => this._getResponseStatus(res));
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