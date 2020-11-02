import React from "react";
import "./body.scss";
import Header from "../header/header";
import SongRow from '../songRow/songRow'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function body({ name, playlist }) {
  return (
    <div className="body">
      <Header name={name} />
      <div className="body__info">
        {playlist.images && <img alt="cover playlist" src={playlist.images[0].url} />}
        <div className="body__infoText">
          <strong>ПЛЕЙЛИСТ</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>
        {playlist.tracks && playlist.tracks.items.map(item => {
          return <SongRow track={item.track} />
        })}
      </div>
    </div>
  );
}

export default body;
