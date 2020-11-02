import React, { useEffect } from "react";
import { connect } from "react-redux";

import Login from "../components/login/login";
import Player from "../components/player/player"

import { getTokenFromUrl } from "../api/spotify";
import { getTokenAction,setInfoAction,setPlaylistAction,setWeeklyPlaylistAction } from "./appAction";

import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

export const App = ({app,getToken,setInfo,setPlayLists,setWeeklyPlaylist}) => {
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      getToken(_token);
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        setInfo(user)
      })
      spotify.getUserPlaylists().then(playlists => {
        setPlayLists(playlists)
      })
      spotify.getPlaylist('37i9dQZEVXcL3hIMguoIoX').then(response => {
        setWeeklyPlaylist(response)
      });
    }
  });

  return (
    <div>
      {app.token ? (
        <Player />
      ) : (
        <Login />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    app: state.app,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(getTokenAction(token)),
  setInfo: (info) => dispatch(setInfoAction(info)),
  setPlayLists: (playlists) => dispatch(setPlaylistAction(playlists)),
  setWeeklyPlaylist: (playlist) => dispatch(setWeeklyPlaylistAction(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
