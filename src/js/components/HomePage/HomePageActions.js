

export function pageTitle(title) {
  return {
    type: 'CHANGE_TITLE',
    payload: title
  }
}

export function setWidth(width) {  
  return {
    type: 'SET_WIDTH',
    payload: width
  }
}

export function setCurrentPage(page) {
  return {
    type: 'SET_PAGE',
    payload: page
  }
}
