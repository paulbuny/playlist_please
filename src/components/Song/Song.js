import './Song.css';
import coverSample from '../../images/cover-sample.jpg'

function Song() {
  const artist = 'Jimi Hendrix';
  const song = 'All Along the Watchtower';
  const album = 'Electric Ladyland';
  const duration = '4:00';

  return (
    <li className="song playlist__item">
      <div className="song__wrapper">
        <img className="song__cover" src={coverSample} alt={`Cover of album ${song}`}></img>
        <div className="song__info">
          <span className="song__name">{song}</span>
          <span className="song__artist">{artist}</span>
        </div>
      </div>
      <div className="song__info">
        <span className="song__album">{album}</span>
      </div>
      <div className="song__info">
        <span className="song__duration">{duration}</span>
      </div>
    </li>
  )
}

export default Song;