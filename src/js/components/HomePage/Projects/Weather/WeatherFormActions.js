import axios from 'axios';

export function updateText(text) {

  return {
    type: 'UPDATE_INPUT',
    payload: text
  }
}


export function getCity(input, date, time) {
  const city = input.toLowerCase();
  return (dispatch) => {
    dispatch({
      type: 'GET_WEATHER',
      payload: axios.get(`/api/weather/${city}`)
        .then(res => {          
          console.log(res.data);
          return { data: res.data, date, time, input };
        })
    })
  }
}


