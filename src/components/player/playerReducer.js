import { SET_INFO,SET_PLAYLISTS } from "../../container/appAction"

const initialState= {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  img: '',
  id: '',
}

export function  playerReducer(state = initialState,action){
  switch(action.type){
    case SET_INFO: 
      return {
        ...state,
        user: action.payload.display_name,
        img: action.payload.images[0].url,
        id: action.payload.id
      }
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.items
      }
    default:
      return state
  }
}