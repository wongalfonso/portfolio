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

function getDrinkPrice(obj, item, size, temp, type) {
  obj.name = item.name;
  obj.size = size;  
  if (type === 'espresso') {
    if (temp == 'hot') {
      obj.sizes = { 
        'short': item.price[0].hot[0].short, 
        'tall': item.price[0].hot[0].tall, 
        'grande': item.price[0].hot[0].grande,  
        'venti': item.price[0].hot[0].venti, 
      };
    } else {
      obj.sizes = {
        'tall': item.price[0].iced[0].tall, 
        'grande': item.price[0].iced[0].grande,  
        'venti': item.price[0].iced[0].venti,
      }
    }
    
  } else {

  }
  let keys = Object.keys(obj.sizes);
  keys.forEach((key) => {
    if (key == size) {
      obj.price = obj.sizes[key]
    }
  })
  return obj;
};

function getIngredients(item, temp, type, size) {
  let obj = {}
  obj.milk = item.milk;    
  obj.size = size.charAt(0).toUpperCase();
  obj.decaf = '';
  if (temp == 'hot' && type == 'espresso') {
    obj.custom = item.custom;
    let shortShots = item.shots[0].hot[0].short ? item.shots[0].hot[0].short : ' ';
    let tallShots = item.shots[0].hot[0].tall ? item.shots[0].hot[0].tall : ' ';
    let grandeShots = item.shots[0].hot[0].grande ? item.shots[0].hot[0].grande : ' ';
    let ventiShots = item.shots[0].hot[0].venti ? item.shots[0].hot[0].venti : ' ';
    obj.shots = {
      'short': shortShots,
      'tall': tallShots,
      'grande': grandeShots,
      'venti': ventiShots,
    }
    let shortSyrups = item.syrup && item.syrup[0] && item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].short ? item.syrup[0].hot[0].short : ' ';
    let tallSyrups = item.syrup && item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].tall ? item.syrup[0].hot[0].tall : ' ';
    let grandeSyrups = item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].grande ? item.syrup[0].hot[0].grande : ' ';
    let ventiSyrups = item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].venti ? item.syrup[0].hot[0].venti : ' ';
    obj.syrups = {
      'short': shortSyrups,
      'tall': tallSyrups,
      'grande': grandeSyrups,
      'venti': ventiSyrups,
    } 
  } else if (temp == 'iced' && type == 'espresso') {
    obj.shots = {
      'tall': item.shots[0].iced[0].tall,
      'grande': item.shots[0].iced[0].grande,
      'venti': item.shots[0].iced[0].venti,
    }
    obj.syrups = {
      'short': item.syrup[0].iced[0].short,
      'tall': item.syrup[0].iced[0].tall,
      'grande': item.syrup[0].iced[0].grande,
      'venti': item.syrup[0].iced[0].venti,
    } 
  }
  let shots = Object.keys(obj.shots);
  shots.forEach((shot) => {
    if (shot == size) {
      obj.shot = obj.shots[shot]
    }
  })
  let syrups = Object.keys(obj.syrups);
  syrups.forEach((syrup) => {
    if (syrup == size) {
      obj.syrup = obj.syrups[syrup]
    }
  })
  return obj
}

export function addItem(currentOrder, item, type, size, temp, decaf, iced) {  
  let orderLength = currentOrder.length;
  let arr = [];
  let obj = {};
  let addTotal, subTotal;  
  let ingredients = item.ingredients && item.ingredients[0] ? item.ingredients[0] : [];
  let currentIngredients = getIngredients(ingredients, temp, type, size);
  if (orderLength > 0) {
    arr = currentOrder.slice();
    obj.key = orderLength;
    if (size) {
      getDrinkPrice(obj, item, size, temp, type);
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
      getDrinkPrice(obj, item, size, temp, type);
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
    payload: { order: arr, currentSelected: orderLength, subTotal: addTotal.subTotal, total: addTotal.total, tax: addTotal.tax, currentIngredients: currentIngredients}
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
  return { subTotal, total, tax }
}

export function changeSize(size, order, selected) {    
  let arr = order.map((item) => {
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
  let updatedArr = arr.map((item, i) => {
    return {
      ...item,
      key: i
    }
  })  
  let editTotal = getTotal(updatedArr);  
  return {
    type: 'REMOVED_ITEM',
    payload: { order: updatedArr, subTotal: editTotal.subTotal, total: editTotal.total, selected: arr.length, currentScreen: 'drinks'}
  }
}

export function cancelOrder() {
  let arr = [];
  return {
    type: 'CANCEL_ORDER',
    payload: { order : arr, subTotal: 0, total: 0, modalIsOpen: false, currentScreen: 'drinks'}
  }
}

export function modalPosOpen(modal) {  
  return {
    type: 'OPEN_POS_MODAL',
    payload: {openModal: true, modalType: modal }
  }
}

export function modalPosClose() {
  return {
    type: 'CLOSE_POS_MODAL',
    payload: false
  }
}
export function modalTenderClose() {
  return {
    type: 'CLOSE_TENDER_MODAL',
    payload: {tenderModal: false, currentOrder: [], currentScreen: 'drinks', subTotal: 0, total: 0}
  }
}

export function saveOrder(order, orderTotal, savedOrders) {  
  let copy = order.slice();
  let obj = {};
  let arr = savedOrders.slice();
  obj.name = '$' + orderTotal.toFixed(2);
  copy.unshift(obj);
  arr.unshift(copy);     
  
  return {
    type: 'SAVE_ORDER',
    payload: {savedOrders: arr, modalIsOpen: false, currentOrder: [], orderTotal: 0, subTotal: 0}
  }
}

export function openOrder(order, savedOrders, key) { 
  let copy = order.slice();
  let saved = savedOrders.slice();
  saved.splice(key, 1);    
  copy.shift()
  let addTotal = getTotal(copy);
  let type = copy[copy.length -1].type;  
  return {
    type: 'OPEN_ORDER', 
    payload : { currentOrder: copy, subTotal: addTotal.subTotal, total: addTotal.total, currentScreen: type, savedOrders: saved }
  }
}

export function calculateOrder(payment, total) {
  let orderTotal = total;
  let returnedAmount = payment - orderTotal;
  let modal, leftover, paid;
  if (returnedAmount < 0) {
    modal = false;
    leftover = returnedAmount * -1
    paid = payment
  } else {
    modal = true;
    paid = payment
  }  

  return {
    type: 'CALCULATE_ORDER',
    payload: { returnedAmount: returnedAmount, tenderModalIsOpen: modal, payment: paid, inputBox: ['', '.', '', '' ], total: leftover }
  }
}

export function inputDigit(digit, inputBox) {  
  const copy = inputBox.slice();
  if (digit == '0 0') {
    copy.push(0)
    copy.push(0)
    copy.reverse();
    let p = copy[4]
    copy[4] = copy[3]
    copy[3] = copy[2];
    copy[2] = p;
    copy.reverse();
  } else {
    copy.push(digit)  
    copy.reverse();
    let p = copy[3]
    copy[3] = copy[2]
    copy[2] = p;
    copy.reverse();  
  }
  let returned = copy.toString().replace(/,/g, '')  
  returned = Number(returned);
  return {
    type: 'ADD_DIGIT',
    payload: { inputBox: copy, payment: returned  }
  }
}

export function totalScreen(screen) {
  return {
    type: 'TOTAL_SCREEN_VIEW',
    payload: screen
  }
}

export function updateItem(number) {
  return {
    type: 'UPDATE_ITEM',
    payload: number
  }
}