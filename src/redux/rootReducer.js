import { combineReducers } from "redux";
import { appReducer } from "../container/appReducer";
import { playerReducer } from "../components/player/playerReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
});
