import { configureStore, combineReducers} from "@reduxjs/toolkit"
import albumReducer from "../reducers/albumReducer";
import favouritesReducer from "../reducers/favouritesReducers";
import isPlayReducer from "../reducers/isPlayReducer";




const rootReducer = combineReducers({
  /*album: albumReducer,
  favourites: favouritesReducer,
  isPlay: isPlayReducer*/
});

const store = configureStore({
    reducer: rootReducer
});
export default store;