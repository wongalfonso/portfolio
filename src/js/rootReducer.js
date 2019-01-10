import { combineReducers } from 'redux';
import userReducer from './userReducer';
import homeReducer from './homeReducer';


const rootReducer = combineReducers({
  user: userReducer,
  home: homeReducer
});

export default rootReducer;
