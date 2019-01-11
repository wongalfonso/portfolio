const defaultState = {  
  input: '',
  throwErr: false,      
  weatherInfo: [],
  searchHistory: [],
  name: '',
  country: '',
  success: false,
  datePrint: ''
};

export default function WeatherReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_WEATHER_PENDING': {
      return {        
        ...state
      };
    }

    case 'GET_WEATHER_FULFILLED': { 
      return {      
        ...state, 
        weatherInfo: payload.weatherInfo, 
        searchHistory: payload.searchHistory,
        input: payload.input,        
        success: true,
        throwErr: false,
        datePrint: payload.datePrint
      }
    }
    case 'GET_WEATHER_REJECTED': {                    
      return {
       ...state, 
       throwErr: true, 
       success: true, 
       searchHistory: payload.err.searchHistory,
       weatherInfo: payload.err.weatherInfo,   
       datePrint: payload.err.datePrint       
      };
    }

    case 'UPDATE_INPUT': {
      return {
        ...state, input: payload,
      };
    }
    default: {
      return state;
    }
  }
} 