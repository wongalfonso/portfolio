import axios from "axios"

export function getCity(input, date, time) {
  const city = input.toLowerCase();
  return (dispatch) => {
    dispatch({
      type: 'GET_WEATHER',
      payload: axios.get(`/api/weather/${city}`)
        .then(res => {
          console.log(res);
          return { data: res.data, date, time, input };
        })
    })
  }
}

