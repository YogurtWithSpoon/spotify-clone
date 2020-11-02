import React from "react";
import "./footer.scss";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Slider } from "@material-ui/core";


function footer() {
  let min = 0;
  let max = 150;
  let volumeValue = 50;

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://cdns-images.dzcdn.net/images/cover/6f32f9b776af857cb29374ffe4750e5e/500x500.jpg"
          alt="album cover"
          className="footer__albumcover"
        />
        <div className="footer__songinfo">
          <a href="http" className="footer__songinfo__song">
            Goliath
          </a>
          <a href="http" className="footer__songinfo__artist">
            Woodkid
          </a>
        </div>
      </div>
      <div className="footer__center">
        <div className="buttons__controls">
          <ShuffleIcon className="buttons__controls__button" />
          <SkipPreviousIcon className="buttons__controls__button" />
          <PlayCircleOutlineIcon
            className="buttons__controls__button"
            fontSize="large"
            style={{ color: "#fff" }}
          />
          <SkipNextIcon className="buttons__controls__button" />
          <RepeatIcon className="buttons__controls__button" />
        </div>
        <div className="timebar">
          <p className="timebar__start">{min}</p>
          <Slider
            min={min}
            max={max}
            defaultValue={0}
            step={1}
            style={{ width: "90%",margin: "0 5px" }}
          />
          <p className="timebar__end">{max}</p>
        </div>
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon />
        <VolumeDownIcon onClick={() => volumeValue = 0}/>
        <Slider min={0} max={100} value={volumeValue} step={1} style={{ width: "40%"}}/>
      </div>
    </div>
  );
}

export default footer;
