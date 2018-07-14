import { combineReducers } from 'redux';
import userReducer from './userReducer';
import FormReducer from './components/HomePage/projects/WeatherApp/WeatherFormReducer';

const rootReducer = combineReducers({
  user: userReducer,
  weather: FormReducer
});

export default rootReducer;
