export const GET_TOKEN = "GET_TOKEN"
export const SET_INFO = "SET_INFO"
export const SET_PLAYLISTS = "SET_PLAYLISTS"
export const SET_PLAYLIST_WEEKLY = "SET_PLAYLIST_WEEKLY"

export const getTokenAction = (token) => {
  return {
    type: GET_TOKEN,
    payload: token
  }
}

export const setInfoAction = (info) => {
  return {
    type: SET_INFO,
    payload: info
  }
}

export const setPlaylistAction = (playlists) => {
  return {
    type: SET_PLAYLISTS,
    payload: playlists,
  }
}

export const setWeeklyPlaylistAction = (playlist) => {
  return {
    type: SET_PLAYLIST_WEEKLY,
    payload: playlist
  }
}