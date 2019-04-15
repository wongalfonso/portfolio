import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { List } from './List';
import { ToDoForm } from './ToDoForm';
import ProjectClose from '../../ProjectClose';
import { createToDoItem, addText, updatePriority, editItem, completed, handleToDoItem, removeItem} from './VstdaActions';

class VSTDA extends Component {
  constructor(props) {
    super(props);
    this.createToDo = this.createToDo.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleToDo = this.handleToDo.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.handlePrior = this.handlePrior.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }  
  handleEnterKey(e) {    
    if (e.key === 'Enter') {
      e.preventDefault();
      const { dispatch, toDo, priority, editing, completed, lists } = this.props;
      let id = Date.now();
      dispatch(createToDoItem(id, toDo, priority, editing, completed, lists ));
    }
  }
  github() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From VSTDA Modal'
    })
  }

  createToDo(event) {
    event.preventDefault();
    const { dispatch, toDo, priority, editing, completed, lists } = this.props;
    let id = Date.now();
    dispatch(createToDoItem(id, toDo, priority, editing, completed, lists ));
  }

  handleText(event) {
    const { dispatch } = this.props;
    dispatch(addText(event.target.value));    
  }

  handlePrior(event) {
    const { dispatch } = this.props;
    let val;
    if (event.target.value === '3') { val = '-danger' }
    if (event.target.value === '2') { val = '-warning' }
    if (event.target.value === '1') { val = '-success' }
    dispatch(updatePriority(val));    
  }

  edit(id, bool) {
    const { dispatch, lists } = this.props;
    dispatch(editItem(id, bool, lists));
  }

  handleCompleted(id, bool) {
    const { dispatch, lists } = this.props;
    dispatch(completed(id, bool, lists));
  }

  handleToDo(newText, newName, id) {    
    const { dispatch, lists } = this.props;    
    dispatch(handleToDoItem(newText, newName, id, lists));
  }

  remove(id) {
    const { dispatch, lists } = this.props;
    dispatch(removeItem(id, lists));    
  }

  render() {
    const { lists, toDo, priority, } = this.props;
    return (
      <div id='vstdaProject' className='all-project-pages'>
        <div className='container vstda-container'> 
          <div className="vstda-content">
            <header className="vstda-header project-header">
              Very Simple Todo App
              <div className = 'vstda-subheader'>
                Track All of the Things
              </div>
            </header>          
            <div className="vstda-content-inputs">
              <ToDoForm createToDo={this.createToDo} 
                        toDo={toDo} 
                        handleText={this.handleText} 
                        priority={priority} 
                        handlePrior={this.handlePrior}
                        handleEnterKey = {this.handleEnterKey}
              />
              <div className='vstda-list' 
                    id='List' 
                    ref={(listEl) => { this.listElement = listEl }}>
                <div className="vstda-list-body">
                  <ul className='vstda-list-body-group'>
                    {lists.map((list) => {
                      return (
                        <List  key={list.id} 
                              list={list} 
                              updateToDo={this.handleToDo} 
                              onRemove={this.remove.bind(this, list.id)} 
                              onEdit={this.edit}
                        >
                          {list.toDo}
                        </List>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>         
          <ProjectClose 
            github = {this.github}
            href = '/'
            link = 'https://github.com/wongalfonso/VSTDA'
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lists: state.home.vstda.lists,
    toDo: state.home.vstda.toDo,
    priority: state.home.vstda.priority,
    id: state.home.vstda.priority,
    newTodo: state.home.vstda.newTodo,
    completed: state.home.vstda.completed,
    editing: state.home.vstda.editing,
    overflow: state.home.vstda.overflow
  }
}

export default connect(mapStateToProps)(VSTDA);

