import { combineReducers } from 'redux';
import HomePageReducer from './components/HomePage/HomePageReducer';
import PosReducer from './components/HomePage/Projects/PosCalc/PosCalcReducer';
import FormReducer from './components/HomePage/Projects/Weather/WeatherFormReducer';
import VstdaReducer from './components/HomePage/Projects/VstdaApp/VstdaReducer';


const homeReducer = combineReducers({
  homePage: HomePageReducer,
  weather: FormReducer,  
  posCalc: PosReducer,
  vstda: VstdaReducer
});

export default homeReducer;