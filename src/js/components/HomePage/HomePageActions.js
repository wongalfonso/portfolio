import ReactGA from 'react-ga';

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

export function mouseEnter(id) {  
  let title = 'Web Developer'
  if (id === 'splash') {
    title = 'Web Developer';
  }
  if (id === 'about') {
    title = 'About Me'
  }
  if (id === 'form') {
    title = 'Form Projects';
  }
  if (id === 'api') {
    title = 'API Projects'
  }
  if (id === 'web') {
    title = 'Web Projects'
  }
  return {
    type: 'MOUSE_ENTER',
    payload: {title: title, page: id}
  }
}

export function mouseExit(id) {
  return {
    type: 'MOUSE_EXIT',
    payload: id
  }
}

export function analytics(location) {
  ReactGA.event({
    category: 'scrolled',
    action: `scrolled to ${location}`
  })
}