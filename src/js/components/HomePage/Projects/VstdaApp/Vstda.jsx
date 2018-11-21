import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { List } from './List';
import { ToDoForm } from './ToDoForm';

export default class VSTDA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      toDo: '',
      priority: 'list-group-item-success',
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

  // componentDidUpdate() {
  //   const list = this.listElement;
  //   const card = this.cardElement;
  //   const hasOverflow = list.offsetHeight < list.scrollHeight;
  //   if (hasOverflow && this.state.overflow !== 'scroll') {
  //     this.setState({ overflow: 'scroll' })
  //   }
  //   if (card.scrollHeight === card.offsetHeight && this.state.overflow === 'scroll') {
  //     this.setState({ overflow: '' })
  //   }
  // }
  gitHub() {
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
    if (event.target.value === '3') { val = 'list-group-item-danger' }
    if (event.target.value === '2') { val = 'list-group-item-warning' }
    if (event.target.value === '1') { val = 'list-group-item-success' }
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
    return (

      <div id='vstdaProject' className='allProjectModals'>
        <div className='container vstdaContainer allProjectModalsContainers'>
          <div className="row project-headers" id = 'vstda-row-header'>
            <div className="col-xl-12">
              <div id='vstdaHeader' className='col-xl-12'>
                <h1>Very Simple Todo App</h1>
                <h4 className='vstdah4'>Track All of the Things</h4>
              </div>
            </div>
          </div>

          <div className="row project-modal-body" id = 'vstda-row-body'>
            <ToDoForm createToDo={this.createToDo} toDo={this.state.toDo} handleText={this.handleText} priority={this.state.priority} handlePrior={this.handlePrior}
            />

            <div className='col-sm-12 col-xl-8' id='List' ref={(listEl) => { this.listElement = listEl }}>
              <div className='card' id='ListCard'
                style={{ "overflowY": this.state.overflow }}
                ref={(card) => { this.cardElement = card }}>
                <div className='card-header' id='todoHeader'>View Todos</div>
                <ul className='list-group'>
                  {this.state.lists.map((list, i) => {
                    return (
                      <List key={list.id} list={list} updateToDo={this.handleToDo} onRemove={this.remove.bind(this, list.id)} onEdit={this.edit}
                      >
                        {list.toDo}
                      </List>
                    )
                  })}
                </ul>
              </div>
            </div>


          </div>

          <div className='row project-close-row'>
            <div className="col-sm-6 col-xl-6">
              <a href="https://github.com/wongalfonso/VSTDA" target="_blank" onClick = {this.gitHub}>
                <img className="gitMark" src="/images/GitHub.png" />
              </a>
            </div>
            <div className="col-sm-6 col-xl-6 closeCol ">
              <button className='btn btn-danger form-control-xl closeBtn' onClick={this.props.close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



