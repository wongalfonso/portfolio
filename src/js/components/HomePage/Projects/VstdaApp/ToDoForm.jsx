import React, { Component } from 'react';

export class ToDoForm extends Component {

  button() {
    if (this.props.toDo.length > 0) {
      return (
        <button className="change-form-foot-btn change-form-foot-btn-active" type="submit" >Add</button>
      )
    } else {
      return (
        <button className="change-form-foot-btn change-form-foot-btn-disabled" type="submit" disabled>Add</button>
      )
    }
  }

  render() {
    return (
      <div className = "vstda-form project-form">
        <form onSubmit={this.props.createToDo}>
          <div className="vstda-form-head project-form-head">
            Add New Todo
            <form className="vstda-form-body project-form-body">
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
              {this.button()}
            </div>

          </div>
        </form>
      </div>

    )
  }
}