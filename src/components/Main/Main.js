import './Main.css';
import Playlist from '../Playlist/Playlist';

function Main ({currentPlaylist, trackList}) {

  return (
    <main className="main-content">
      <Playlist currentPlaylist={currentPlaylist} trackList={trackList}/>
    </main>
  )
}

export default Main;