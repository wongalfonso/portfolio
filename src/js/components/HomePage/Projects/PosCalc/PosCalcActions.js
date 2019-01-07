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

export function addItem(currentOrder, item) {
  let orderLength = currentOrder.length;
  let arr = [];
  let obj = {};
  let subTotal = 0;
  let tax;
  let total = 0;
  if (orderLength > 0) {    
    arr = currentOrder.slice();  
    obj.key = orderLength;
    obj.name = item.name;
    obj.price = item.price;
    arr.push(obj);    
    for (let i =0; i < arr.length; i ++) {      
      subTotal = arr[i].price + subTotal;      
    }
    tax = subTotal * .0775;
    total = tax + subTotal;
  } else {
    subTotal = item.price;
    obj.key = 0;
    obj.name = item.name;
    obj.price = item.price;
    tax = subTotal * .0775;
    total = tax + subTotal;
    arr.push(obj);
  }  

  return {
    type: "ADD_ITEM",
    payload: {order: arr, subTotal: subTotal, currentSelected: orderLength, total: total }
  }
}
