import axios from 'axios';

export function getMenu() {
  const getAllItems = axios.get('/api/menu');
  return (dispatch) => {
    dispatch({
      type: 'GET_MENU',
      payload: getAllItems.then((res) => {
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

function getDrinkPrice(obj, item, size) {
  obj.name = item.name;
  obj.size = size;
  obj.sizes = { 'tall': item.tall, 'grande': item.grande, 'venti': item.venti };
  let keys = Object.keys(item);
  keys.forEach((key) => {
    if (key == size) {
      obj.price = item[key]
    }
  })
  return obj;
};

export function addItem(currentOrder, item, type, size) {  
  let orderLength = currentOrder.length;
  let arr = [];
  let obj = {};
  let subTotal = 0;
  let tax, addTotal;
  let total = 0;
  if (orderLength > 0) {
    arr = currentOrder.slice();
    obj.key = orderLength;
    if (size) {
      getDrinkPrice(obj, item, size);
    } else {
      obj.price = item.price;
      obj.name = item.name;
      obj.price = item.price;
    }
    obj.type = type
    arr.push(obj);
    addTotal = getTotal(arr)
  } else {
    if (size) {
      getDrinkPrice(obj, item, size);
      subTotal = obj.price;
    } else {
      obj.price = item.price;
      obj.name = item.name;
    }
    obj.key = 0;
    obj.type = type
    arr.push(obj);
    addTotal = getTotal(arr);    
  }

  return {
    type: "ADD_ITEM",
    payload: { order: arr, currentSelected: orderLength, subTotal: addTotal.subTotal, total: addTotal.total }
  }
}

function getTotal(arr) {
  let subTotal = 0;
  let total = 0;
  let tax;
  for (let i = 0; i < arr.length; i++) {
    subTotal = arr[i].price + subTotal;
  }
  tax = subTotal * .0775;
  total = tax + subTotal;
  return { subTotal, total }
}

export function changeSize(size, order, selected) {    
  let arr = order.map((item, i) => {
    let price;
    if (item == order[selected]) {          
      price = item.sizes[size]
      return {
        ...item,   
        price: price,      
        size: size,        
      }
    }
    return item
  })
  let editTotal = getTotal(arr);
  return {
    type: "CHANGE_SIZE",
    payload: { size: size, currentOrder: arr, subTotal: editTotal.subTotal, total: editTotal.total}
  }
}

export function selected(key, type, currentOrder) {  
  let size = currentOrder[key].size
  return {
    type: 'SELECTED_ITEM',
    payload: { selected: key, currentScreen: type, drinkSize: size }
  }
}

export function removeSelected(order, selected) {  
  let arr = order.filter(item => item.key !== selected
  )  
  let editTotal = getTotal(arr);  
  return {
    type: 'REMOVED_ITEM',
    payload: { order: arr, subTotal: editTotal.subTotal, total: editTotal.total, selected: arr.length}
  }
}

export function cancelOrder() {
  let arr = [];
  let total, subTotal = 0;
  return {
    type: 'CANCEL_ORDER',
    payload: { order : arr, subTotal: subTotal, total: total, modalIsOpen: false}
  }
}

export function modalOpen(modal) {
  return {
    type: 'OPEN_MODAL',
    payload: {openModal: true, modalType: modal }
  }
}

export function modalClose() {
  return {
    type: 'CLOSE_MODAL',
    payload: false
  }
}

export function saveOrder(order) {
  let arr = [];
  
  return {
    type: 'SAVE_ORDER',
    payload: order
  }
}