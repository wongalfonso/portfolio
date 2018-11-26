import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { List } from './List';
import { ToDoForm } from './ToDoForm';
import ProjectClose from '../../ProjectClose';

export default class VSTDA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      toDo: '',
      priority: '-item-success',
      id: '',
      newTodo: '',
      completed: false,
      editing: false,
      overflow: '',
    };
    this.createToDo = this.createToDo.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleToDo = this.handleToDo.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.handlePrior = this.handlePrior.bind(this);
  }
  github() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From VSTDA Modal'
    })
  }
  createToDo(event) {
    event.preventDefault();
    this.setState({
      lists: [{
        id: Date.now(),
        toDo: this.state.toDo,
        priority: this.state.priority,
        editing: this.state.editing,
        completed: this.state.completed
      },
      ...this.state.lists
      ],
      toDo: '',
    })
  }

  handleText(event) {
    this.setState({
      toDo: event.target.value
    })
  }

  handlePrior(event) {
    let val;
    if (event.target.value === '3') { val = '-item-danger' }
    if (event.target.value === '2') { val = '-item-warning' }
    if (event.target.value === '1') { val = '-item-success' }
    this.setState({ priority: val })
  }

  edit(id, bool) {
    this.setState({
      lists: this.state.lists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            editing: bool
          };
        }
        return todo;
      })
    });
  }
  handleCompleted(id, bool) {
    this.setState({
      lists: this.state.lists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: bool
          };
        }
        return todo;
      })
    });
  }

  handleToDo(newText, newName, id) {
    this.setState({
      lists: this.state.lists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            toDo: newText,
            priority: newName,
            editing: false
          };
        }
        return todo
      })
    });
  }

  remove(id) {
    var lists = this.state.lists.filter(list => list.id !== id)
    this.setState({ lists })
  }


  render() {
    const { createToDo, toDo, handleText, priority, handlePrior, lists} = this.state;   console.log(lists);
    return (

      <div id='vstdaProject' className='all-project-pages'>
        <div className='container vstda-container'>          
          <header className="vstda-header project-header">
            Very Simple Todo App
          </header>
          <header className='vstda-subheader'>
            Track All of the Things
          </header>
          <div className="content vstda-content">
            <ToDoForm createToDo={this.createToDo} 
                      toDo={this.state.toDo} 
                      handleText={this.handleText} 
                      priority={this.state.priority} 
                      handlePrior={this.handlePrior}
            />

            <div className='vstda-list' 
                  id='List' 
                  ref={(listEl) => { this.listElement = listEl }}>
              <div className="vstda-list-body">
                <div className='vstda-list-body-header' id='todoHeader'>
                  View Todos
                </div>
                <ul className='vstda-list-body-group'>
                  {this.state.lists.map((list, i) => {
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
          <ProjectClose 
            github = {this.github}
            close = {this.props.closeModal}
          />
        </div>
      </div>
    )
  }
}



