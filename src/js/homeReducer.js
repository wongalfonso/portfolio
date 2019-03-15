import { combineReducers } from 'redux';
import HomePageReducer from './components/HomePage/HomePageReducer';
import PosReducer from './components/HomePage/Projects/PosCalc/PosCalcReducer';
import WeatherReducer from './components/HomePage/Projects/Weather/WeatherFormReducer';
import VstdaReducer from './components/HomePage/Projects/VstdaApp/VstdaReducer';
import AstroReducer from './components/HomePage/Projects/AstroWeight/AstroWeightReducer';
import BPMReducer from './components/HomePage/Projects/BPM/BPMReducer';


const homeReducer = combineReducers({
  homePage: HomePageReducer,
  weather: WeatherReducer,  
  posCalc: PosReducer,
  vstda: VstdaReducer,
  astro: AstroReducer,
  bpm: BPMReducer 
});

export default homeReducer;