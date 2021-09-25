import './SearchResult.css';
import Song from '../Song/Song';

function SearchResult (props) {
  const currentTrackList = [{
    track: {
      id: 1,
      album: {
        name: 'Nothing Else',
        images: [{url: 'https://images.genius.com/16d9d9b1d2a2e4c6a92d907eed99c39b.1000x1000x1.png'}]
      },
      name: 'Acid Rain',
      artists: [{name: 'Lorn'}],
      duration_ms: 240000,
    }
  }]

  return (
    <div className="search-result">
      <ul className="search-result__list">
      {
              currentTrackList.map((item) => (
                <Song key={item.track.id}
                      image={item.track.album.images[0].url}
                      name={item.track.name}
                      artists={item.track.artists}
                      album={item.track.album.name}
                      duration={item.track.duration_ms}
                />
              ))
            }
      </ul>
    </div>
  )
}

export default SearchResult;