import './Playlist.css';
import Song from '../Song/Song';
import playlistCover from '../../images/playlist-cover-sample.jpg'

function Playlist() {
  return (
    <section className="playlist">
      <div className="playlist__info-wrapper">
        <img className="playlist__cover" src={playlistCover} alt="playlist cover"></img>
        <div className="playlist__info">
          <span className="playlist__title">Absolute playlist</span>
          <span className="playlist__description">Best playlist in the world!</span>
        </div>
      </div>
      <ol className="playlist__list">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </ol>
    </section>
  )
}

export default Playlist;