const defaultState = {
  lists: [],
  toDo: '',
  priority: '-success',
  id: '',
  newTodo: '',
  completed: false,
  editing: false,
  overflow: '',
}

export default function VstdaReducer(state = defaultState, action) {
  const { payload, type } = action;

  switch(type) {
    case 'CREATE_TODO' : {
      return {
        ...state, lists: payload.lists, toDo: payload.toDo
      }
    }
    case 'ADD_TEXT' : {
      return {
        ...state, toDo: payload
      }
    }
    case 'UPDATE_PRIORITY' : {
      return {
        ...state, priority: payload
      }
    }
    case 'EDIT_ITEM' : {
      return {
        ...state, lists: payload
      }
    }
    case 'COMPLETED_ITEM': {
      return {
        ...state, lists: payload
      }
    }
    case 'HANDLE_ITEM' : {
      return {
        ...state, lists: payload
      }
    }
    case 'REMOVE_ITEM' : {
      return {
        ...state, lists: payload
      }
    }
    default: {
      return state
    }
  }
}