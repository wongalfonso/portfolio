import React from 'react';

export const List = ({ onEdit, onRemove, updateToDo, list}) => {
  console.log(list);
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

  const renderEdit = () => {
    return (
      <li className={'vstda-list-body-group-edit' + list.priority} id='vstdaEdit'> 
        <label>Desription</label>
        <textarea className='vstda-list-body-group-edit-update-text' 
                  ref={input => _newText = input} 
                  type='text' 
                  defaultValue={list.toDo}>
        </textarea>
        <div className = 'vstda-list-body-group-edit-btns'>          
          <label  className = 'vstda-list-body-group-edit-btns-label'
                  htmlFor = 'updateToDoPriority' 
                  id='update-label'>
            Priority
          </label>
          <select   className='vstda-list-body-group-edit-btns-select' 
                    id = 'updateToDoPriority' 
                    ref={input => _priority = input} 
                    defaultValue={list.priority}>
            <option value='-item-success'>Low Priority
            </option>
            <option value='-item-warning'>Medium Priority
            </option>
            <option value='-item-danger'>High Priority
            </option>
          </select>                    
          <button className='vstda-list-body-group-edit-btns-cancel' 
                  onClick={cancel}>
            Cancel
          </button>            
          <button className='vstda-list-body-group-edit-btns-submit' 
                  onClick={save}>
            Save
          </button>          
        </div>
      </li>
    )
  }

  const renderList = () => {
    return (
      <li className={'vstda-list-body-group' + list.priority} id='list'>
        <div className='vstda-list-body-group-text'> {list.toDo} </div>
        <div className="vstda-list-body-group-btns">
          <span className='vstda-list-body-group-btns-edit'>
            <a  href='#'               
                onClick={edit}>
              <i className='far fa-edit'></i>
            </a>
          </span>
          <span className='vstda-list-body-group-btns-delete'>
            <a  href='#' 
                ref={() => _newText = list.toDo} 
                onClick={remove} style={{ color: 'red' }}>
              <i className='far fa-trash-alt'></i>
            </a>
          </span>
        </div>
      </li>
    )
  }

  return (
    (list.editing) ? renderEdit() : renderList()
  )
}