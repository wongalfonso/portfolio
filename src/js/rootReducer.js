import { combineReducers } from 'redux';
import userReducer from './userReducer';
import PosReducer from './components/HomePage/Projects/PosCalc/PosCalcReducer';
import FormReducer from './components/HomePage/Projects/Weather/WeatherFormReducer';

const rootReducer = combineReducers({
  user: userReducer,
  weather: FormReducer,  
  posCalc: PosReducer
});

export default rootReducer;
