import React, { Component } from 'react';

export class ToDoForm extends Component {
  componentDidUpdate() {    
    this.input.focus();
  }
  render() {
    const { toDo, createToDo, handleEnterKey } = this.props;
    let length = toDo.length;
    return (
      <div className="vstda-form">
        <form className="vstda-form-body">
          <div className="vstda-form-body-group">
            {length > 0 ?
              <a
                className="vstda-form-foot-btn"
                onClick={createToDo}                
                type="submit">
                <i className='fas fa-plus vstda-form-foot-btn-active'></i>
              </a> :
              <a
                className="vstda-form-foot-btn"
                type="submit"
                disabled>
                <i className='fas fa-plus vstda-form-foot-btn-disabled'></i>
              </a>}
            <input
              className='vstda-form-body-group-input'
              ref={(input) => { this.input = input; }}
              type='text'
              value={this.props.toDo}
              onChange={this.props.handleText}
              onFocus={this.props.onFocus}
              onKeyDown={handleEnterKey}
              autoFocus = 'true'
              placeholder='Add an Item..'>
            </input>
            <select
              className="vstda-form-body-group-select"
              onChange={this.props.handlePrior}
            >
              <option defaultValue hidden>Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </form>
      </div>

    )
  }
}