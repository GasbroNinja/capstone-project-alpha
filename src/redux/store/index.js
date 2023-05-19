import { configureStore, combineReducers} from "@reduxjs/toolkit";

import profile from '../reducers/loginReducer';
import cardsStorage from "../reducers/cardHomeReducer";
import favouritesReducer from "../reducers/favouritesReducers";
import eventsStorage from "../reducers/eventsHomeReducer";


const rootReducer = combineReducers({
  cards : cardsStorage,
  eventi : eventsStorage,
  favourites: favouritesReducer,
  user: profile
});

const store = configureStore
({
  reducer: rootReducer,
});

export default store;
