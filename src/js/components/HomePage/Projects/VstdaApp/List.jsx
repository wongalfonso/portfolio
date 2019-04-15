import React from 'react';

export const List = ({ onEdit, onRemove, updateToDo, list, handleEnterKeyUpdate }) => {
  const edit = (e) => {
    e.preventDefault()
    onEdit(list.id, true);
  }
  let _newText, _priority, _checked;  
  const remove = (e) => {
    e.preventDefault()
    onRemove(list.id)
  }
  const cancel = (e) => {
    e.preventDefault()
    onEdit(list.id, false);
  }
  const save = () => {
    updateToDo(_newText.value, _priority.value, list.id)
  }
  const completed = () => {
    completed(_checked.value)
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateToDo(_newText.value, _priority.value, list.id)
    }
  }

  const renderEdit = () => {
    return (
      <li className={'vstda-list-body-group vstda-list-body-group' + list.priority} id='vstdaEdit'>    
          <a
            className={"vstda-list-body-group" + list.priority + 
          "-save"}
            onClick={save}
            type="submit">
            <i className={'fas fa-plus vstda-list-body-group' + list.priority + '-save-btn'}></i>
          </a>
          <input
            className={'vstda-list-body-group' + list.priority + '-input'}
            ref={input => _newText = input}
            type='text'
            defaultValue={list.toDo}
            autoFocus
            onKeyDown = {handleEnter}
            >
          </input>
          <select
            className={"vstda-list-body-group" + list.priority + "-select"}
            id='updateToDoPriority'
            ref={input => _priority = input}
            defaultValue={list.priority}>>
              <option defaultValue hidden>Priority</option>
              <option value='-success'>Low Priority</option>
              <option value='-warning'>Medium Priority</option>
              <option value='-danger'>High Priority</option>
          </select>
          <a
            className={"vstda-list-body-group" + list.priority + "-cancel"}
            onClick={cancel}>
            <i className={'fas fa-window-close vstda-list-body-group' + list.priority + '-cancel'}></i>
          </a>
      </li>
    )
  }

  const renderList = () => {
    return (
      <li className={'vstda-list-body-group' + list.priority} id='list'>
        <span className={'vstda-list-body-group' + list.priority + '-delete'}>
          <input type="checkbox" onClick = {remove}/>
        </span>
        <div className={'vstda-list-body-group' + list.priority + '-text'}>            
          {list.toDo}
        </div>
          <span className={'vstda-list-body-group' + list.priority + '-edit'}>
            <a href='#'
              onClick={edit}>
              <i className='far fa-edit'></i>
            </a>
          </span>
      </li>
    )
  }

  return (
    (list.editing) ? renderEdit() : renderList()
  )
}