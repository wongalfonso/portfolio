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

function getDrinkPrice(item, size, temp, type) {
  let obj = {}, tempObj = {};
  obj.name = item.name;
  obj.size = size;
  // Check if drink is latte
  if (type === 'latte' || type == 'espresso') {
    // Check if drink is hot
    if (temp == 'hot') {
      tempObj.sizes = {
        'short': item.price[0].hot[0].short,
        'tall': item.price[0].hot[0].tall,
        'grande': item.price[0].hot[0].grande,
        'venti': item.price[0].hot[0].venti,
      };
      // Check if drink is iced
    } else {
      tempObj.sizes = {
        'tall': item.price[0].iced[0].tall,
        'grande': item.price[0].iced[0].grande,
        'venti': item.price[0].iced[0].venti,
      }
    }
    // Check if drink is iced
  } else if (type == 'ic') {
    tempObj.sizes = {
      'tall': item.price[0].tall,
      'grande': item.price[0].grande,
      'venti': item.price[0].venti,
      'trenta': item.price[0].trenta,
    }
  } else {

    tempObj.sizes = {
      'short': item.price[0].short,
      'tall': item.price[0].tall,
      'grande': item.price[0].grande,
      'venti': item.price[0].venti,
    }
  }
  let keys = Object.keys(tempObj.sizes);
  keys.forEach((key) => {
    if (key == size) {
      obj.price = tempObj.sizes[key]
    }
  })
  return obj;
};

function getIngredients(item, temp, type, size) {
  let obj = {}, shots, syrups, syrupAmount, shotAmount, syrupCount, shotCount;
  let tempObj = {};
  obj.milk = item.milk;
  obj.size = size;
  obj.sizeCode = size.charAt(0).toUpperCase();
  obj.decaf = '';
  obj.temp = temp;
  obj.custom = item.custom ? item.custom : ''

  function getSyrup() {
    tempObj = {
      'tall': item.syrup[0] && item.syrup[0].tall ? item.syrup[0].tall : '',
      'grande': item.syrup[0] && item.syrup[0].grande ? item.syrup[0].grande : '',
      'venti': item.syrup[0] && item.syrup[0].venti ? item.syrup[0].venti : '',
      'trenta': item.syrup[0] && item.syrup[0].trenta ? item.syrup[0].trenta : '',
    }
    syrups = Object.keys(tempObj);
    syrups.forEach((syrup) => {
      if (syrup == size) {
        syrupAmount = tempObj[syrup]
      }
    })
    return syrupAmount
  }

  function getSyrupsHot() {
    tempObj = {
      'short': item.syrup && item.syrup[0] && item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].short ? item.syrup[0].hot[0].short : ' ',
      'tall': item.syrup && item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].tall ? item.syrup[0].hot[0].tall : ' ',
      'grande': item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].grande ? item.syrup[0].hot[0].grande : ' ',
      'venti': item.syrup[0] && item.syrup[0].hot[0] && item.syrup[0].hot[0].venti ? item.syrup[0].hot[0].venti : ' '
    }
    syrups = Object.keys(tempObj);
    syrups.forEach((syrup) => {
      if (syrup == size) {
        syrupAmount = tempObj[syrup]
      }
    })
    return syrupAmount;
  }

  function getSyrupsIced() {
    tempObj = {
      'tall': item.syrup[0].iced[0].tall,
      'grande': item.syrup[0].iced[0].grande,
      'venti': item.syrup[0].iced[0].venti,
    }
    syrups = Object.keys(tempObj);
    syrups.forEach((syrup) => {
      if (syrup == size) {
        syrupAmount = tempObj[syrup]
      }
    })
    return syrupAmount;
  }

  function getShotsHot() {
    tempObj = {
      'short': item.shots[0].hot[0].short ? item.shots[0].hot[0].short : ' ',
      'tall': item.shots[0].hot[0].tall ? item.shots[0].hot[0].tall : ' ',
      'grande': item.shots[0].hot[0].grande ? item.shots[0].hot[0].grande : ' ',
      'venti': item.shots[0].hot[0].venti ? item.shots[0].hot[0].venti : ' ',
    }
    shots = Object.keys(tempObj);
    shots.forEach((shot) => {
      if (shot == size) {
        shotAmount = tempObj[shot]
      }
    })
    return shotAmount;
  }

  function getShotsIced() {
    tempObj = {
      'tall': item.shots[0].iced[0].tall,
      'grande': item.shots[0].iced[0].grande,
      'venti': item.shots[0].iced[0].venti,
    }

    shots = Object.keys(tempObj);
    shots.forEach((shot) => {
      if (shot == size) {
        shotAmount = tempObj[shot]
      }
    })
    return shotAmount;
  }


  if (temp === 'hot' && type === 'latte') {
    syrupCount = getSyrupsHot()
    shotCount = getShotsHot()
    obj.syrup = syrupCount;
    obj.shot = shotAmount;
  } else if (temp === 'iced' && type === 'latte') {
    syrupCount = getSyrupsIced();
    shotCount = getShotsIced();
    obj.syrup = syrupCount;
    obj.shot = shotCount;
  } else if (type === 'espresso') {
    shotCount = getShotsIced();
    obj.shot = shotCount;
  } else if (type === 'ic') {
    syrupCount = getSyrup()
    obj.syrup = syrupCount
  } else if (type === 'brewed') {
    obj.syrup = '';
    obj.shot = '';
  } else {
    syrupCount = getSyrup();
    obj.syrup = syrupCount;
    obj.shot = item.shot ? item.shot : '';
  }
  return obj
}

export function addItem(currentOrder, item, type, size, temp, decaf) {
  console.log(currentOrder, item, type, size, temp, decaf);
  let orderLength = currentOrder.length;
  let arr = [];
  let obj = {};
  let addTotal, modal, modalType, drinkSize;
  // Check if Items are in Current Order
  if (type == 'brewed' && size == 'trenta' 
  || type == 'latte' && size == 'trenta' 
  || type == 'latte' && size == 'kids' 
  || type == 'ic' && size == 'kids' 
  || type == 'ic' && size == 'short' 
  || type == 'brewed' && size == 'kids'
  || type == 'brewed' && temp == 'iced'
  || type == 'latte' && size == 'short' && temp == 'iced'
  || type == 'latte' && size == 'kids' && temp == 'iced') {
    if (orderLength > 0) {
      arr = currentOrder.slice();  
      addTotal = getTotal(arr);
    } else {
      arr = [];
      addTotal = { subTotal: 0, tax: 0, total: 0 };
    }
    modal = true;
    modalType = 'rejected';
    temp = 'hot';
  } else {
    let ingredients = item.ingredients && item.ingredients[0] ? item.ingredients[0] : [];
    let currentIngredients = getIngredients(ingredients, temp, type, size);
    let getPrice = getDrinkPrice(item, size, temp, type);
    if (orderLength > 0) {
      arr = currentOrder.slice();
      //Add to Order
      obj.key = orderLength;
    } else {
      // Create New Order    
      obj.key = 0;
    }
    let sizeCode = (size == 'trenta') ? 'Tr' : size.charAt(0).toUpperCase();
    obj.price = item.price
    obj.decaf = decaf;
    obj.shot = currentIngredients.shot;
    obj.syrup = currentIngredients.syrup;
    obj.milk = currentIngredients.milk;
    obj.custom = currentIngredients.custom;
    obj.temp = currentIngredients.temp;
    obj.ingredients = item.ingredients;
    obj.size = getPrice.size;
    obj.currentPrice = getPrice.price;
    obj.name = getPrice.name;
    obj.type = type;
    obj.sizeCode = sizeCode;
    temp = currentIngredients.temp;
    drinkSize = getPrice.size;
    arr.push(obj);
    addTotal = getTotal(arr);
  }
  return {
    type: "ADD_ITEM",
    payload: { order: arr, currentSelected: orderLength, total: addTotal, currentIngredients: obj, modal: modal, modalType: modalType, drinkSize: drinkSize, temp: temp }
  }
}

function getTotal(arr) {
  let subTotal = 0;
  let total = 0;
  let tax;
  for (let i = 0; i < arr.length; i++) {
    subTotal = arr[i].currentPrice + subTotal;
  }
  tax = subTotal * .0775;
  total = tax + subTotal;
  return { subTotal, total, tax }
}

export function prepDrink(size, temp) {
  return {
    type: 'PREP_DRINK',
    payload: {size: size, temp: temp}
  }
}
export function modifyDrink(size, order, selected, ingredients, temp) {
  console.log(size, order, selected, ingredients, temp)
  let currentOrder = order[selected] ? order[selected] : [];
  let arr = [], modal, modalType, drinkSize, currentIngredients, editTotal;
  //Check If Size can be modified
  if (currentOrder.type == 'brewed' && size == 'trenta'
    || currentOrder.type == 'latte' && size == 'trenta'
    || currentOrder.type == 'latte' && size == 'kids'
    || currentOrder.type == 'latte' && size == 'short' && temp == 'iced'
    || currentOrder.type == 'latte' && size == 'kids' && temp == 'iced'
    || currentOrder.type == 'ic' && size == 'kids'
    || currentOrder.type == 'ic' && size == 'short'
    || currentOrder.type == 'brewed' && size == 'kids'
    || currentOrder.type == 'brewed' && temp == 'iced') {
    // || currentOrder.type == 'latte' && size == 'short' && temp == 'iced'
    arr = order;
    modal = true;
    modalType = 'rejected';
    drinkSize = currentOrder.size;
    editTotal = getTotal(arr);
    currentIngredients = ingredients
  } else {
    if (selected == order.length) {
      arr = order;
      drinkSize = size;
      temp = temp;
    } else {
      arr = order.map((item) => {
        if (item == order[selected]) {
          let drinkPrice = getDrinkPrice(item, size, temp, item.type);
          let ingredients = item.ingredients && item.ingredients[0] ? item.ingredients[0] : [];
          let drinkIngredients = getIngredients(ingredients, temp, item.type, size);
          let sizeCode = (size == 'trenta') ? 'Tr' : size.charAt(0).toUpperCase();
          return {
            ...item,
            currentPrice: drinkPrice.price,
            size: drinkPrice.size,
            shot: drinkIngredients.shot,
            syrup: drinkIngredients.syrup,
            temp: drinkIngredients.temp,
            sizeCode: sizeCode
          }
        }
        return item
      })
    }
    currentIngredients = arr[selected]
    // Modify Size
    modal = false;
    modalType = '';
    editTotal = getTotal(arr);
    drinkSize = size;
  }
  return {
    type: "CHANGE_SIZE",
    payload: { size: drinkSize, currentOrder: arr, total: editTotal, posModalIsOpen: modal, modalType: modalType, currentIngredients: currentIngredients, temp: temp }
  }
}

export function selected(key, type, currentOrder) {
  let currentIngredients = currentOrder[key];
  let size = currentIngredients.size;
  let temp = currentIngredients.temp;
  return {
    type: 'SELECTED_ITEM',
    payload: { selected: key, currentScreen: 'drinks', drinkSize: size, temp: temp, currentIngredients: currentIngredients }
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
    payload: { order: updatedArr, subTotal: editTotal.subTotal, total: editTotal.total, selected: arr.length, currentScreen: 'drinks' }
  }
}

export function nextDrink(currentOrder) {
  const key = currentOrder.length;
  return {
    type: 'NEXT_DRINK',
    payload: { selected: key, drinkSize: 'grande', currentIngredients: {}, temp: 'hot' }
  }
}

export function cancelOrder() {
  let arr = [];
  return {
    type: 'CANCEL_ORDER',
    payload: { order: arr, subTotal: 0, total: 0, modalIsOpen: false, currentScreen: 'drinks' }
  }
}

export function modalPosOpen(modal) {
  return {
    type: 'OPEN_POS_MODAL',
    payload: { openModal: true, modalType: modal }
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
    payload: { tenderModal: false, currentOrder: [], currentScreen: 'drinks', subTotal: 0, total: 0 }
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
    payload: { savedOrders: arr, modalIsOpen: false, currentOrder: [], orderTotal: 0, subTotal: 0 }
  }
}

export function openOrder(order, savedOrders, key) {
  let copy = order.slice();
  let saved = savedOrders.slice();
  saved.splice(key, 1);
  copy.shift()
  let addTotal = getTotal(copy);
  let type = copy[copy.length - 1].type;
  return {
    type: 'OPEN_ORDER',
    payload: { currentOrder: copy, subTotal: addTotal.subTotal, total: addTotal.total, currentScreen: type, savedOrders: saved }
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
    payload: { returnedAmount: returnedAmount, tenderModalIsOpen: modal, payment: paid, inputBox: ['', '.', '', ''], total: leftover }
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
    payload: { inputBox: copy, payment: returned }
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