

export function createToDoItem(id, todo, priority, editing, completed, lists) {

  let completeList = [{
    id: id,
    toDo: todo,
    priority: priority,
    editing: editing,
    completed: completed, 
  },
  ...lists  
  ]
  return {
    type: 'CREATE_TODO',
    payload: { lists: completeList, toDo: '' }
  }
}

export function addText(text) {
  return {
    type: 'ADD_TEXT',
    payload: text
  }
}

export function updatePriority(val) {
  return {
    type: 'UPDATE_PRIORITY',
    payload: val
  }
}

export function editItem(id, bool, lists) {
  let completeList = lists.map((todo) => {
    if (todo.id == id) {
      return {
        ...todo,
        editing: bool
      };
    }
    return todo;
  })
  return {
    type: 'EDIT_ITEM',
    payload: completeList
  }
}

export function completed(id, bool, lists) {
  let completeList = lists.map((todo) => {
    if (todo.id == id) {
      return {
        ...todo,
        completed: bool
      };
    }
    return todo;
  })
  return {
    type: 'COMPLETED_ITEM',
    payload: completeList
  }
}

export function handleToDoItem(text, name, id, lists) {
  let completeList = lists.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        toDo: text,
        priority: name,
        editing: false
      };
    }
    return todo
  })

  return {
    type: 'HANDLE_ITEM',
    payload: completeList
  }
}

export function removeItem(id, lists) {

  let list = lists.filter(list => list.id !== id)
  return {
    type: 'REMOVE_ITEM',
    payload: list
  }
}