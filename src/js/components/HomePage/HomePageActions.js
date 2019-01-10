

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

export function modalOpen(selected) {
  return {
    type: 'OPEN_MODAL',
    payload: {selected: selected, modalIsOpen: true}
  }
}

export function modalClose() {
  return {
    type: 'CLOSE_MODAL',
    payload: false
  }
}