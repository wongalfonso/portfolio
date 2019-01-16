import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from './PosCalcActions';

class QuantityScreen extends Component {
  constructor(props) {
    super(props);
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber(number) {
    const { dispatch } = this.props;
    dispatch(updateItem(number));
  }

  render() {
    return (
      <div className="pos-order-screen-list-quantity">
        <div className="quantity-container">
          <div className = 'quantity-screen'></div>
          <button className = 'quantity-btn'>Backspace</button>
          <button className = 'quantity-btn' 
            onClick = {() => this.props.changeTotalScreen('total')}>
            Cancel
          </button>
          <button className = 'quantity-input'>1</button>
          <button className = 'quantity-input'>2</button>
          <button className = 'quantity-input'>3</button>
          <button className = 'quantity-input'>4</button>
          <button className = 'quantity-input'>5</button>
          <button className = 'quantity-input'>6</button>
          <button className = 'quantity-input'>7</button>
          <button className = 'quantity-input'>8</button>
          <button className = 'quantity-input'>9</button>
          <button className = 'quantity-input'>.</button>
          <button className = 'quantity-input'>0</button>
          <button className = 'quantity-enter'>Update Quantity</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}
export default connect(mapStateToProps)(QuantityScreen);