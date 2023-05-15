import { configureStore, combineReducers} from "@reduxjs/toolkit";

import profile from '../reducers/loginReducer';
import cardsStorage from "../reducers/cardHomeReducer";


const rootReducer = combineReducers({
  cards : cardsStorage,
  user: profile
});

const store = configureStore
({
  reducer: rootReducer,
});

export default store;
