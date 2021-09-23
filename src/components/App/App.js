import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import spotifyApi from '../../utils/mainApi';
import { useState, useEffect } from 'react';

function App() {
  // Временное решение
  const [token, setToken] = useState();


  // Временное решение (Возможно)
  const clientId = '3555f0bb55b54cd0ba3c78cdae0320b4';
  const clientSecret = '06368413f13945ffbb172018151042af';
  const playlistId = '5m5N5vubRxXAuqHkOH35an';

  // Переменные с информацией плэйлиста и треклиста
  const [currentPlaylist, setCurrentPlaylist] = useState({
    image: '',
    name: '',
    description: '',
  });

  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    spotifyApi.login(clientId, clientSecret)
    .then((res) => {
      setToken(res.access_token);
    });
  }, []);

  useEffect(() => {
    spotifyApi.getListOfPlaylistsTracks(token, playlistId)
    .then ((res) => {
      setTrackList(res.items);
    })
    .catch((err) => console.log(`###: ${err.message} -> Error in attempt to take current playlist\'s tracks`));
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



  return (
    <div className="page">
      <Header />
      <Main currentPlaylist={currentPlaylist} trackList={trackList}/>
      <Footer />
    </div>
  );
}

export default App;
