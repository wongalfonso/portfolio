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
  console.log(item, size, temp, type)
  let obj = {}, tempObj = {};
  obj.name = item.name;
  obj.size = size;
  // Check if drink is latte
  if (type === 'latte' || type == 'espresso' || type == 'ameri') {
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
      obj.price = tempObj.sizes[key];
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

export function addItem(currentOrder, currentSelected, prep, item, type) {
  console.log(currentOrder, currentSelected, prep, item, type);
  let selected = currentOrder[currentSelected];
  let temp = selected && selected.temp ? selected.temp : 'hot';
  temp = type == 'ic' ? 'iced' : temp;
  let size = selected && selected.size ? selected.size : 'grande';
  let modPrint = selected && selected.modPrint ? selected.modPrint : [];
  let orderLength = currentOrder.length;
  let arr = [], mod = [], obj = {}, modObj = {};
  let addTotal, modal, modalType, prepDrink, modTemp, sizeCode;
  // Check if Items are in Current Order
  if (type == 'brewed' && size == 'trenta'
    || type == 'ameri' && size == 'trenta'
    || type == 'ameri' && size == 'kids'
    || type == 'ameri' && size == 'short' && temp == 'iced'
    || type == 'latte' && size == 'trenta'
    || type == 'latte' && size == 'kids'
    || type == 'latte' && size == 'short' && temp == 'iced'
    || type == 'latte' && size == 'kids' && temp == 'iced'
    || type == 'ic' && size == 'kids'
    || type == 'ic' && size == 'short'
    || type == 'brewed' && size == 'kids'
    || type == 'brewed' && temp == 'iced') {
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
    let allIngredients = item.ingredients;
    let allPrices = item.price;
    let currentIngredients = getIngredients(ingredients, temp, type, size);
    let getPrice = getDrinkPrice(item, size, temp, type);
    sizeCode = (size == 'trenta') ? 'Tr' : size.charAt(0).toUpperCase();
    // console.log(currentIngredients);
    // console.log(getPrice);

    //Add drink to Created Order
    if (orderLength > 0) {
      //Add Drink to Modified Created Order
      if (prep) {
        arr = currentOrder.map((item) => {
          if (item == selected) {
            modObj.milk = currentIngredients.milk;
            modObj.shot = currentIngredients.shot;
            modObj.syrup = currentIngredients.syrup;
            modObj.custom = currentIngredients.custom;
            mod.push(modObj);
            return {
              ...item,
              modifications : mod,
              price: allPrices, //all prices
              ingredients: allIngredients, //all ingredients
              size : getPrice.size,
              currentPrice: getPrice.price,
              name: getPrice.name,
              type: type,
              sizeCode: sizeCode,
              key: orderLength,
              modPrint: modPrint
            }
          }
          return item;
        })
      // Add Drink to Unmodified Order
      } else {
        arr = currentOrder.slice();
        obj.key = orderLength;
        modObj.decaf = '';
        modObj.modTemp = '';
        modObj.milk = currentIngredients.milk;
        modObj.blonde = '';
        modObj.shot = currentIngredients.shot;
        modObj.syrup = currentIngredients.syrup;
        modObj.custom = currentIngredients.custom;
        mod.push(modObj);
        obj.modifications = mod;
        obj.price = item.price; //all prices
        obj.ingredients = item.ingredients; //all ingredients
        obj.temp = currentIngredients.temp;
        obj.size = getPrice.size;
        obj.currentPrice = getPrice.price;
        obj.name = getPrice.name;
        obj.type = type;
        obj.sizeCode = sizeCode;
        obj.modPrint = modPrint;
        arr.push(obj);      
      }
      // Create New Order    
    } else {
      obj.key = 0;
      modObj.decaf = '';
      modObj.modTemp = '';
      modObj.milk = currentIngredients.milk;
      modObj.blonde = '';
      modObj.shot = currentIngredients.shot;
      modObj.syrup = currentIngredients.syrup;
      modObj.custom = currentIngredients.custom;
      mod.push(modObj);
      obj.modifications = mod;
      obj.price = item.price; //all prices
      obj.ingredients = item.ingredients; //all ingredients
      obj.temp = currentIngredients.temp;
      obj.size = getPrice.size;
      obj.currentPrice = getPrice.price;
      obj.name = getPrice.name;
      obj.type = type;
      obj.sizeCode = sizeCode;
      obj.modPrint = modPrint;
      arr.push(obj);
    }
  }
  addTotal = getTotal(arr);
  prepDrink = false;
  console.log(addTotal);
  return {
    type: "ADD_ITEM",
    payload: { 
      order: arr, 
      currentSelected: arr.length - 1, 
      total: addTotal, 
      modal: modal, 
      modalType: modalType, 
      prepDrink: prepDrink 
    }
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

export function modifyDrink(order, selected, total, size, temp, espType) {
  // console.log(order, selected, total, size, temp, espType)
  let currentOrder = order[selected] ? order[selected] : [];
  let arr, mod = [], modObj = {}, obj = {}, modPrint = [], modal, modalType, modAdded, currentIngredients, editTotal, prepDrink, decaf, modTemp;
  let currentTemp = temp ? temp : 'hot';
  let currentSize = size ? size : 'grande';
  let blonde = espType ? espType : false;
  //Check If Size can be modified
  if (blonde) {
    modPrint.push('blonde');
  }
  if (currentOrder.type == 'brewed' && currentSize == 'trenta'
    || currentOrder.type == 'ameri' && currentSize == 'trenta'
    || currentOrder.type == 'ameri' && currentSize == 'kids'
    || currentOrder.type == 'ameri' && currentSize == 'short' && currentTemp == 'iced'
    || currentOrder.type == 'latte' && currentSize == 'trenta'
    || currentOrder.type == 'latte' && currentSize == 'kids'
    || currentOrder.type == 'latte' && currentSize == 'short' && currentTemp == 'iced'
    || currentOrder.type == 'latte' && currentSize == 'kids' && currentTemp == 'iced'
    || currentOrder.type == 'ic' && currentSize == 'kids'
    || currentOrder.type == 'ic' && currentSize == 'short'
    || currentOrder.type == 'brewed' && currentSize == 'kids'
    || currentOrder.type == 'brewed' && currentTemp == 'iced') {
    arr = order;
    modal = true;
    modalType = 'rejected';
    obj.size = currentOrder.size;
    editTotal = total;
  } else {
    // Prep Drink
    if (selected == order.length) {      
      arr = order.slice();
      modObj.decaf = decaf;
      modObj.modTemp = modTemp;
      modObj.milk = currentIngredients;
      modObj.blonde = espType;
      modObj.shot = currentIngredients;
      modObj.syrup = currentIngredients;
      modObj.custom;
      mod.push(modObj);
      obj.modPrint = modPrint;
      obj.modifications = mod;
      obj.price; //all prices
      obj.ingredients; //all ingredients
      obj.temp = currentTemp;
      obj.size = size;
      obj.currentPrice;
      obj.name;
      obj.type;
      obj.sizeCode;
      arr.push(obj);
      prepDrink = true;      
      editTotal = !total.total ? {subtotal: 0, total: 0, tax: 0} : total;
      //Modify Prepped Drink
    } else if (currentOrder.name == undefined) {
      arr = order.map((item) => {
        if (currentOrder == item) {
          modObj.decaf = decaf;
          modObj.modTemp = modTemp;
          modObj.milk = currentIngredients;
          modObj.blonde = blonde;
          modObj.shot = currentIngredients;
          modObj.syrup = currentIngredients;
          modObj.custom;
          mod.push(modObj);
          return {
            ...item, 
            modifications: mod,
            temp: currentTemp,
            size: currentSize,
            modPrint: modPrint
          }
        }
        return item;
      })
      editTotal = !total.total ? {subtotal: 0, total: 0, tax: 0} : total;
      prepDrink = true;
    } else {
      //MODIFY DRINK
      arr = order.map((item) => {
        if (item == order[selected]) {
          let drinkPrice = getDrinkPrice(item, size, temp, item.type);
          let ingredients = item.ingredients && item.ingredients[0] ? item.ingredients[0] : [];
          let drinkIngredients = getIngredients(ingredients, temp, item.type, size);
          let sizeCode = (size == 'trenta') ? 'Tr' : size.charAt(0).toUpperCase();
          modObj.decaf = decaf;
          modObj.modTemp = modTemp;
          modObj.milk = drinkIngredients.milk;
          modObj.blonde = espType;
          modObj.shot = drinkIngredients.shot;
          modObj.syrup = drinkIngredients.syrup;
          modObj.custom = drinkIngredients.custom;
          mod.push(modObj);
          return {
            ...item,
            currentPrice: drinkPrice.price,
            size: drinkPrice.size,            
            temp: drinkIngredients.temp,
            sizeCode: sizeCode,
            modifications: mod,
            modPrint: modPrint
          }
        }
        return item
      })
      prepDrink = false;
      editTotal = getTotal(arr);
    }
    modal = false;
    modalType = '';
  }
  // console.log(arr);
  return {
    type: "MODIFY_DRINK",
    payload: { 
      currentOrder: arr, 
      total: editTotal, 
      posModalIsOpen: modal, 
      modalType: modalType, 
      prepDrink: prepDrink, 
      currentSelected: selected,
      modAdded: modAdded
    }
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