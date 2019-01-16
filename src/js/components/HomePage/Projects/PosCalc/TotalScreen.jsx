import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalScreen extends Component {
  render() {
    const { subTotal, orderTotal, payment, tax, returnedAmount, currentOrder } = this.props;
    let sub = subTotal ? subTotal : 0;
    let total = orderTotal ? orderTotal : 0;
    let taxes = tax ? tax : 0;
    return (
      <div className='pos-order-screen-list-total'>
        <div className="pos-order-screen-list-total-container">
        <div className='pos-order-screen-btn'>
          <button>Quantity</button>
        </div>
        <table className='pos-order-screen-table'>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>$ {sub.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>$ {taxes.toFixed(2)}</td>
            </tr>
            {(returnedAmount < 0) ?
              <tr className='final-total-under'>
                <td>paid</td>
                <td>$ (- {payment.toFixed(2)})</td>
              </tr>
              :
              <tr className='final-total'>
                <td></td>
                <td></td>
              </tr>
            }
            <tr className='final-total'>
              <td>TOTAL DUE:</td>
              <td>
                {(currentOrder.length > 0) ?
                  <button onClick={() => this.props.selectScreen('tender')}>
                    $ {total.toFixed(2)}
                  </button> :
                  <button disabled>
                    $ {total.toFixed(2)}
                  </button>
                }
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="pos-order-screen-voids">
          <button className='pos-order-screen-voids-btns void'
            onClick={this.removeItem}>
            Void Item
                </button>
          <button className='pos-order-screen-voids-btns cancel'
            onClick={() => this.openModal('cancel')}>
            Cancel
                </button>
          {(currentOrder.length < 1) ?
            <button className='pos-order-screen-voids-btns save'
              onClick={() => this.selectScreen('orders')}>
              Find Order
                </button>
            :
            <button className='pos-order-screen-voids-btns save'
              onClick={() => this.openModal('save')}>
              Save Order
                </button>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    subTotal: state.home.posCalc.subTotal,
    orderTotal: state.home.posCalc.orderTotal,
    tax: state.home.posCalc.tax,
    currentOrder: state.home.posCalc.currentOrder,
  }
}

export default connect(mapStateToProps)(TotalScreen);