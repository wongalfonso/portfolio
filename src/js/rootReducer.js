import { combineReducers } from 'redux';
import userReducer from './userReducer';
import FormReducer from './components/HomePage/projects/Weather/WeatherFormReducer';
import HomePageReducer from './components/HomePage/HomePage/HomePageReducer';

const rootReducer = combineReducers({
  user: userReducer,
  weather: FormReducer,
  home: HomePageReducer
});

export default rootReducer;
