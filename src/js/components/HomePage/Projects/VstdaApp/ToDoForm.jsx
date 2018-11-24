import React, { Component } from 'react';


const button = (length, createToDo) => {
  if (length > 0) {
    return (
      <button 
        className="project-form-foot-btn project-form-foot-btn-active" 
        onClick = {createToDo}
        type="submit">
        Add
      </button>
    )
  } else {
    return (
      <button 
        className="project-form-foot-btn project-form-foot-btn-disabled"    
        type="submit" 
        disabled>
        Add
      </button>
    )
  }
}



export class ToDoForm extends Component {


  render() {
    const { toDo, createToDo } = this.props;
    let length = toDo.length;
    return (
      <div className = "vstda-form project-form">
          <div className="vstda-form-head project-form-head">
            Add New Todo
          </div>
          <form className="vstda-form-body project-form-body" 
                // onSubmit={this.props.createToDo}
                >
            <div className="vstda-form-body-group project-form-body-group form-group">
              <label>I want to..</label>
              <textarea
                className="vstda-form-body-group-textarea project-form-body-gropu-textarea"
                value={this.props.toDo}
                onChange={this.props.handleText}>
              </textarea>

              <label>How Much of a priority is this?</label>
              <select
                className="vstda-form-body-group-select project-form-body-group-select"
                onChange={this.props.handlePrior}
              >
                <option defaultValue hidden>Select a Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </form>
          <div className="vstda-form-foot project-form-foot">
            {button(length, createToDo)}
          </div>
      </div>

    )
  }
}