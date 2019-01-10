import { combineReducers } from 'redux';
import HomePageReducer from './components/HomePage/HomePageReducer';
import PosReducer from './components/HomePage/Projects/PosCalc/PosCalcReducer';
import FormReducer from './components/HomePage/Projects/Weather/WeatherFormReducer';


const homeReducer = combineReducers({
  homePage: HomePageReducer,
  weather: FormReducer,  
  posCalc: PosReducer
});

export default homeReducer;