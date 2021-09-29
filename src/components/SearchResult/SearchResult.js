import './SearchResult.css';
import Song from '../Song/Song';
import { useState, useEffect } from 'react';

function SearchResult (props) {
  const [marginTop, setMarginTop] = useState(0);
  const [searchResult, setSearchResult] = useState(props.searchResult);

  console.log(searchResult);

  // Вычисление высоты отступа для списка поиска
  useEffect(() => {
    const headerHeight = document.querySelector('.header').clientHeight;

    setMarginTop(headerHeight + 40); //40 - высота top padding в px
  }, []);

  useEffect(() => {
    setSearchResult(props.searchResult);
  }, [props.searchResult]);

  return (
    <div style={{paddingTop: marginTop + 'px'}} className={props.isShown ? 'search-result search-result_display_active' : 'search-result'}>
      <ul className="search-result__list">{
        searchResult.length === 0 ? 'Ничего не найдено' :
          searchResult.map((item) => (
            <Song key={item.id}
                  image={item.album.images[0].url}
                  name={item.name}
                  artists={item.artists}
                  album={item.album.name}
                  duration={item.duration_ms}
                  status={''}
            />
          ))
      }
      </ul>
    </div>
  )
}

export default SearchResult;