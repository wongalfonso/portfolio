import axios from 'axios';


export function updateText(text) {
  return {
    type: 'UPDATE_INPUT',
    payload: text
  }
}

function handleError() {
  let weather = {};
  let coord = {};
  let weatherInfo = [];
  coord.lon = "36.5323";
  coord.lat = "116.9325";
  weather.coord = coord;
  let main = {};
  main.humidity = '0'
  main.pressure = '0'
  main.temp = '-1000'
  main.tem_max = '-99'
  main.tem_min = '-2000'
  weather.main = main;
  weather.name = 'Hell'
  let sys = {}
  sys.country = 'US';
  sys.sunrise = 1547304689;
  sys.sunset = 1547341368;
  weather.sys = sys;
  let arr = [];
  let obj = {};
  obj.description = 'maybe you mispelled the city name'
  obj.icon = '13n'
  arr.push(obj)
  weather.weather = arr;
  let wind = {};
  wind.speed = '130';
  weather.wind = wind;
  weatherInfo.push(weather);
  return weatherInfo;
}
export function getDate(timestamp) {
  let days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let daycode = timestamp.getDay();
  let day = days[daycode - 1];
  let monthcode = timestamp.getMonth();
  let month = months[monthcode];
  let date = timestamp.getDate();
  let year = timestamp.getFullYear();
  let hour = timestamp.getHours();
  if (hour > 12) { hour = Number(hour) - 12}
  if (hour < 10) { hour = '0' + hour }
  let mins = timestamp.getMinutes();
  if (mins < 10) { mins = '0' + mins }
  let secs = timestamp.getSeconds();
  if ( secs < 10) { secs = '0' + secs }
  return day + ' ' + month + ' ' + date + ', ' + year + ' ' + hour +':'+mins+':'+secs + ' PDT';
}

export function getCity(input, history) {
  let searchHistory = history.slice();
  let weatherInfo = [];
  let search = {};
  const city = input.toLowerCase();
  let today = new Date();
  let dd = today.getDate();  
  let mm = today.getMonth() + 1;  
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let yyyy = today.getFullYear();
  let longDate = months[mm - 1] + ' ' + dd + ', ' + yyyy;
  let date = (mm + '/' + dd + '/' + yyyy)

  let hh = today.getHours();
  if (hh > 12) { hh = Number(hh) - 12}
  if (hh < 10) { hh = '0' + hh}
  let min = today.getMinutes();
  if (mm < 10) { mm = '0' + mm}
  let sec = today.getSeconds();
  if (sec < 10) {sec = '0' + sec}
  let time = (' ' + hh + ':' + min + ':' + sec);

  search.city = city;
  search.time = time;
  search.date = date;
  searchHistory.unshift(search);
  return (dispatch) => {
    dispatch({
      type: 'GET_WEATHER',
      payload: axios.get(`/api/weather/${city}`)
        .then((res) => {
          if (res.data.cod == 404) {
            throw Error, {
              searchHistory: searchHistory,
              weatherInfo: handleError(),
              datePrint: longDate
            }
          } else {
            weatherInfo.push(res.data);
            return {
              searchHistory: searchHistory,
              weatherInfo: weatherInfo,
              input: input,
              datePrint: longDate
            }
          }
        })
        .catch((err) => {
          console.log(err);
          throw new Error, {
            err: err
          }
        })
    })
  }
}


