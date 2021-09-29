import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import spotifyApi from '../../utils/mainApi';
import { useState, useEffect } from 'react';
import { useCallback } from 'react/cjs/react.development';

function App() {

  // Временное решение (Возможно)
  const clientId = '3555f0bb55b54cd0ba3c78cdae0320b4';
  const clientSecret = '06368413f13945ffbb172018151042af';
  const playlistId = '5m5N5vubRxXAuqHkOH35an';

  const [searchQuery, setSearchQuery] = useState('');

  // Переменная с токеном пользователя
  const [token, setToken] = useState('');

  // Переменные с информацией плэйлиста и треклиста
  const [currentPlaylist, setCurrentPlaylist] = useState({
    image: '',
    name: '',
    description: '',
  });

  const [trackList, setTrackList] = useState([]);

  const [searchResult, setSearchResult] = useState([{
    id: 1,
    album: {
      images: [{url: ''}],
      name: ''
    },
    name: '',
    artists: '',
    duration_ms: 42000,
}]);

  useEffect(() => {
    spotifyApi.authorization(clientId, clientSecret)
    .then((res) => {
      console.log(res.access_token);
      setToken(res.access_token);
    })
    .catch((err) => console.log(`###: ${err.message} -> Error in attempt to authorize`))
  }, []);

  useEffect(() => {
    spotifyApi.getListOfPlaylistsTracks(token, playlistId)
    .then ((res) => {
      setTrackList(res.items);
    })
    .catch((err) => console.log(`###: ${err.message} -> Error in attempt to take current playlist's tracks`));
  }, [token]);

  useEffect(() => {
    spotifyApi.getPlaylist(token, playlistId)
    .then((res) => {
      setCurrentPlaylist({
        image: res.images[0].url,
        name: res.name,
        description: res.description,
      });
    })
    .catch((err) => console.log(`###: ${err.message} -> Error in attempt to take current playlist`));
  }, [token]);

  // Функция для поиска трека
  const searchByQuery = useCallback((token, query) => {
      if (searchQuery.length === 0) {
        console.log("Not searching!");
      } else {
        console.log("Searching!");

        spotifyApi.searchForAnItem(token, query)
        .then((res) => {
          setSearchResult(res.tracks.items);
        });
      }
  }, [searchQuery.length])

  useEffect(() => {
    searchByQuery(token, searchQuery);
  }, [token, searchQuery, searchByQuery]);

  // Обновление поиска трека по изменению запроса
  function onSearchQueryUpdate (query) {
    setSearchQuery(query);
  }

  // Поиск трека при submit формы
  function onHandleSubmit () {
    searchByQuery(token, searchQuery);
  }

  return (
    <div className="page">
      <Header onSearchQueryUpdate={onSearchQueryUpdate}
              onHandleSubmit={onHandleSubmit}
              searchResult={searchResult}
              />
      <Main currentPlaylist={currentPlaylist}
            trackList={trackList}
            />
      <Footer />
    </div>
  );
}

export default App;
