import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import profile from '../reducers/loginReducer';

const rootReducer = combineReducers({
  user: profile
});

const store = configureStore
({
  reducer: rootReducer,
  compose: (applyMiddleware(thunk))
});

export default store;
