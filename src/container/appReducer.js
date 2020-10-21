import {GET_TOKEN} from '../container/appAction'
//BQB-I4-ptLy-3ZNmYR326GadRjkf0SYzETu22qUtQFVGklGy5fO6jN7GREikMYugfNx0DK5ZIUTBGTtJSpZEsOf3-7T97aK-1hDKcWh4eDBIclfbaGGjDVqNrsxvOlFizJXypKSPEBmgw34jL6y0J9QjE_l5gjwhBYuO-50SxbQLhJ81YUNh
const initialState= {
  token: 'BQB-I4-ptLy-3ZNmYR326GadRjkf0SYzETu22qUtQFVGklGy5fO6jN7GREikMYugfNx0DK5ZIUTBGTtJSpZEsOf3-7T97aK-1hDKcWh4eDBIclfbaGGjDVqNrsxvOlFizJXypKSPEBmgw34jL6y0J9QjE_l5gjwhBYuO-50SxbQLhJ81YUNh'
  // token: ''
}

export function appReducer(state = initialState,action){
  switch(action.type){
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}