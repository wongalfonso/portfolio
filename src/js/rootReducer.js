import { combineReducers } from 'redux';
import userReducer from './userReducer';
import FormReducer from './components/HomePage/Projects/Weather/WeatherFormReducer';

const rootReducer = combineReducers({
  user: userReducer,
  weather: FormReducer,  
});

export default rootReducer;
