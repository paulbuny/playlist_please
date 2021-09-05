import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import spotifyApi from '../../utils/mainApi';
import { useState, useEffect } from 'react';

function App() {
  // Временное решение
  const token = 'BQBtikWBfbG_IBBm1xsGKZFhxhz4ULQXSj1BTXdPVYWYJVMzP_8N7_H6ydi7qadfs0aka-aW3o6TmvNfWe9MtY4FVPVmUQM02F60rGcOn8_4uq7tu4PrgJpR5SP0_jDB798D5jrpclg6DgCMgcYZKlFg-mzrZ3PxrSm3fJrvEC-8kMP1v1g';

  // Временное решение
  const playlistId = '5m5N5vubRxXAuqHkOH35an';

  // Переменные с информацией плэйлиста и треклиста
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    spotifyApi.getListOfPlaylistsTracks(token, playlistId)
    .then ((res) => {
      setTrackList(res.items);
    });
  }, []);

  useEffect(() => {
    spotifyApi.getPlaylist(token, playlistId)
    .then((res) => {
      setCurrentPlaylist({
        image: res.images[0].url,
        name: res.name,
        description: res.description,
      });
    });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main currentPlaylist={currentPlaylist} trackList={trackList}/>
      <Footer />
    </div>
  );
}

export default App;
