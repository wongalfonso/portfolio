import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import twenty from '../../../../../../public/images/twenty-dollar-bill.jpg';
import ten from '../../../../../../public/images/ten-dollar-bill.jpg';
import five from '../../../../../../public/images/five-dollar-bill.jpg';
import { modalTenderClose, calculateOrder } from './PosCalcActions';

const modalStyle = {
  overlay: {
    zIndex: 199
  }
}


class TenderScreen extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  closeModal() {
    const { dispatch } = this.props;
    dispatch(modalTenderClose());
  }

  calculate(payment) {
    const { dispatch, total } = this.props;
    dispatch(calculateOrder(payment, total))
  }

  render() {
    const { total, tenderModalIsOpen, returnedAmount } = this.props;
    return (
      <div className="tender-screen">
        <Modal
          isOpen={tenderModalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          style={modalStyle}
          className={'ReactModal_TENDER'}
        >
          <div className='tender-modal'>
            <div className='tender-modal-message'>
              $ {returnedAmount.toFixed(2)}
            </div>
            <div className='tender-modal-btns'>
              <button onClick={this.closeModal}
                className='tender-modal-btns-exit'>
                Exit
          </button>
            </div>
          </div>
        </Modal>
        <div className="tender-screen-cash">
          <div className="tender-screen-cash-header">
            <b><i>Quick Cash</i></b>
          </div>
          <img src={twenty} className='tender-screen-cash-bills'
            onClick={() => this.calculate(20)} />
          <img src={ten} className="tender-screen-cash-bills"
            onClick={() => this.calculate(10)} />
          <img src={five} className="tender-screen-cash-bills"
            onClick={() => this.calculate(5)} />

          <div className="tender-screen-cash-btns">
            <button className='round-up'
              onClick={() => this.calculate(Math.ceil(total))}>
              $ {Math.ceil(total).toFixed(2)}
            </button>
          </div>
          <div className="tender-screen-cash-btns">
            <button className='exact' onClick={this.submit}>
              Cash
            </button>
          </div>
        </div>
        <div className="tender-screen-inputs">
          <div className="tender-screen-inputs-total">
            <div>$</div>
            <div className='total-input-screen'>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>1</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>2</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>3</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>4</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>5</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>6</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>7</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>8</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>9</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>0</button>
            </div>
            <div className="tender-screen-inputs-row-btns">
              <button>00</button>
            </div>
          </div>
          <div className="tender-screen-inputs-row">
            <div className="tender-screen-inputs-row-btns">
              <button>Exact Tender</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    total: state.posCalc.orderTotal,
    returnedAmount: state.posCalc.returnedAmount,
    tenderModalIsOpen: state.posCalc.tenderModalIsOpen
  }
}

export default connect(mapStateToProps)(TenderScreen);