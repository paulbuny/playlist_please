import './Playlist.css';
import Song from '../Song/Song';
import playlistCover from '../../images/playlist-cover-sample.jpg';
import React from 'react';
import { useEffect, useState } from 'react';

function Playlist() {
  const [isShown, setIsShown] = useState(false);

  // Переменные для вычисления высоты блока со списком треков
  const [playlistContainerHeight, setPlaylistContainerHeight] = useState(0);
  const [playlistInfoHeight, setPlaylistInfoHeight] = useState(0);
  const [plalistHeight, setPlalistHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(()=> {
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

  // Функция переключения состояния отображения плейлиста
  function playlistShownHandler() {
    setIsShown(!isShown);
  }

  return (
    <section style={{maxHeight: playlistContainerHeight + 'px'}} className="playlist" onMouseEnter={playlistShownHandler} onMouseLeave={playlistShownHandler}>
      <div className="playlist__info-wrapper" onClick={playlistShownHandler}>
        <img className="playlist__cover" src={playlistCover} alt="playlist cover"></img>
        <div className="playlist__info">
          <span className="playlist__title">Absolute playlist</span>
          <span className="playlist__description">Best playlist in the world!</span>
        </div>
      </div>
      <ol style={isShown ? {maxHeight: plalistHeight + 'px'} : {maxHeight: 0 + 'px'}}
          className={isShown ? 'playlist__list playlist__list_active' : `playlist__list`}
      >
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