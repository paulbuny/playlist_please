import './Playlist.css';
import Song from '../Song/Song';
import React from 'react';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

function Playlist({currentPlaylist, trackList}) {
  const [isShown, setIsShown] = useState(false);
  const [currentTrackList, setCurrentTrackList] = useState(trackList);

  // Переменные для вычисления высоты блока со списком треков
  const [playlistContainerHeight, setPlaylistContainerHeight] = useState(0);
  const [playlistInfoHeight, setPlaylistInfoHeight] = useState(0);
  const [plalistHeight, setPlalistHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  // Вычисление размеров плэйлиста при монтировании компонента
  useEffect(() => {
    let header = document.querySelector('.header').clientHeight;
    let footer = document.querySelector('.footer').clientHeight;
    let playlistInfo = document.querySelector('.playlist__info').clientHeight;
    let windowHeight = window.innerHeight;

    setHeaderHeight(header);
    setFooterHeight(footer);
    setPlaylistContainerHeight(windowHeight - footerHeight - headerHeight);
    setPlaylistInfoHeight(playlistInfo);
    setPlalistHeight(playlistContainerHeight - playlistInfoHeight);
  });

  useEffect(() => {
    setCurrentTrackList(trackList);
  }, [trackList]);

  // Функция переключения состояния отображения плейлиста
  function playlistShownHandler() {
    setIsShown(!isShown);
  }

  return (
    <section style={{maxHeight: playlistContainerHeight + 'px'}} className="playlist" onMouseEnter={playlistShownHandler} onMouseLeave={playlistShownHandler}>
      <div className="playlist__info-wrapper" onClick={playlistShownHandler}>
        <img className="playlist__cover" src={currentPlaylist.image} alt="playlist cover"></img>
        <div className="playlist__info">
          <span className="playlist__title">{currentPlaylist.name}</span>
          <span className="playlist__description">{currentPlaylist.description}</span>
        </div>
      </div>
      <ol style={isShown ? {maxHeight: plalistHeight + 'px'} : {maxHeight: 0 + 'px'}}
          className={isShown ? 'playlist__list playlist__list_active' : `playlist__list`}>
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
      </ol>
    </section>
  )
}

export default Playlist;