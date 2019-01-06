import axios from 'axios';

export function getMenu() {
  const getAllItems = axios.get('/api/menu');
  return (dispatch) => {
    dispatch({
      type: 'GET_MENU',
      payload: getAllItems.then((res)=> {        
        return res.data
      })
    })
  }
}

export function changeScreen(screen) {  
  return {
    type: 'CURRENT_SCREEN',
    payload: screen
  }
}

export function addItem(item) {
  console.log(item);
  return {
    type: "ADD_ITEM",
    payload: item
  }
}