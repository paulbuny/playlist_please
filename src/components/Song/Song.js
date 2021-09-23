import './Song.css';

function Song({
  image,
  name,
  artists,
  album,
  duration,
}) {

  function artistsList() {
    let newArtist = [];

    artists.forEach((item) => {
      newArtist.push(item.name);
    })

    return newArtist.join(', ');
  }

  function msToMin(ms) {
    return `${Math.floor(ms / 1000 / 60)}:${Math.floor(ms / 1000 % 60) === 0 ? '00' : Math.floor(ms / 1000 % 60)}`;
  }

  return (
    <li className="song playlist__item">
      <div className="song__wrapper">
        <img className="song__cover" src={image} alt={`Cover of album`}></img>
        <div className="song__info">
          <span className="song__name">{name}</span>
          <span className="song__artist">{artistsList()}</span>
        </div>
      </div>
      <div className="song__info">
        <span className="song__album">{album}</span>
      </div>
      <div className="song__info">
        <span className="song__duration">{msToMin(duration)}</span>
      </div>
    </li>
  )
}

export default Song;