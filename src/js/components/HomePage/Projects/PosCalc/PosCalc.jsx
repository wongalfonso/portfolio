import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Modal from 'react-modal';
import ProjectClose from './../../ProjectClose';
import TenderScreen from './TenderScreen';
import BrewedScreen from './BrewedScreen';
import FoodScreen from './FoodScreen';
import SavedOrders from './SavedOrders';
import CustomScreen from './CustomScreen';
import MilkScreen from './MilkScreen';
import SyrupScreen from './SyrupScreen';
import BuilderScreen from './BuilderScreen';
import LatteScreen from './LatteScreen';
import TotalScreen from './TotalScreen';
import RightTabs from './RightTabs';
import QuantityScreen from './QuantityScreen';
import { getMenu, changeScreen, selected, removeSelected, cancelOrder, modalPosOpen, modalPosClose, saveOrder, totalScreen, nextDrink } from './PosCalcActions';

const modalStyle = {
  overlay: {
    zIndex: 199
  }
}
class PosCalc extends Component {
  constructor(props) {
    super(props);
    this.selectScreen = this.selectScreen.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.cancelEntireOrder = this.cancelEntireOrder.bind(this);
    this.openModal = this.openModal.bind(this);
    this.cancelOrderModal = this.cancelOrderModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveEntireOrder = this.saveEntireOrder.bind(this);
    this.changeTotalScreen = this.changeTotalScreen.bind(this);
    this.changeSizeRejectedModal = this.changeSizeRejectedModal.bind(this);
    this.newItem = this.newItem.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMenu())
  }

  selectScreen(screen) {
    const { dispatch } = this.props;
    dispatch(changeScreen(screen));
  }
  selectedItem(key, type) {
    const { dispatch, currentOrder } = this.props;
    dispatch(selected(key, type, currentOrder))
  }
  removeItem() {
    const { dispatch, currentOrder, currentSelected } = this.props;
    dispatch(removeSelected(currentOrder, currentSelected))
  }
  cancelEntireOrder() {
    const { dispatch } = this.props;
    dispatch(cancelOrder())
  }
  openModal(modal) {

    const { dispatch } = this.props;
    dispatch(modalPosOpen(modal))
  }
  closeModal() {
    const { dispatch } = this.props;
    dispatch(modalPosClose());
  }
  newItem() {
    const { dispatch, currentOrder } = this.props;
    dispatch(nextDrink(currentOrder))
  }
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from project',
      action: 'Projects'
    })
    return 'https://github.com/wongalfonso/pos-calculator'
  }  
  cancelOrderModal() {
    return (
      <div className='pos-modal'>
        <div className='pos-modal-message'>
          Are you sure you want to cancel the entire order?
        </div>
        <div className='pos-modal-btns'>
          <button onClick={this.closeModal}
            className='pos-modal-btns-cancel'>
            Cancel
          </button>
          <button onClick={this.cancelEntireOrder}
            className='pos-modal-btns-submit'>
            Submit
          </button>
        </div>
      </div>
    )
  }
  saveEntireOrder() {
    const { dispatch, currentOrder, orderTotal, savedOrders } = this.props;
    dispatch(saveOrder(currentOrder, orderTotal, savedOrders))
  }

  changeTotalScreen(screen) {
    const { dispatch } = this.props;
    dispatch(totalScreen(screen))
  }

  saveOrderModal() {
    return (
      <div className='pos-modal'>
        <div className='pos-modal-message'>
          Are you sure you want to save this order?
        </div>
        <div className='pos-modal-btns'>
          <button onClick={this.closeModal}
            className='pos-modal-btns-cancel'>
            Cancel
          </button>
          <button onClick={this.saveEntireOrder}
            className='pos-modal-btns-save'>
            Save
          </button>
        </div>
      </div>
    )
  }

  changeSizeRejectedModal() {    
    return (
      <div className = 'rejected-size'>
        <div className='rejected-size-modal'>
        <div className='rejected-size-modal-message'>
          This Item cannot be modified to this type
      </div>
        <div className='rejected-size-btns'>
          <button onClick={this.closeModal}
            className='rejected-size-btns-ok'>
            OK
          </button>
        </div>
      </div>
      </div>
    )
  }

  render() {
    const { currentScreen, currentOrder, currentSelected, posModalIsOpen, modalType, orderTotal, payment, totalScreenView } = this.props;
    let order = currentOrder ? currentOrder : null;   
    return (
      <div id="posCalcProject">
        <div className="pos-sides">
          <div className="pos-header">
            <header>
              Point of Sale Calculator
            </header>
          </div>
        </div>
        <div className="pos-container">
          <Modal
            isOpen={posModalIsOpen}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
            style={modalStyle}
            className={'ReactModal_POS'}
          >
            {(modalType == 'cancel') && this.cancelOrderModal()}
            {(modalType == 'save') && this.saveOrderModal()}
            {(modalType == 'rejected') && this.changeSizeRejectedModal('size')}
          </Modal>         
          <div className="pos-menus">
            <div className="pos-menus-functions">
              {(orderTotal > 0) ?
                <button className={(currentScreen == 'tender') ? 'pos-menus-functions-btns pos-menus-functions-btns--active' : 'pos-menus-functions-btns pos-menus-functions-btns--default'}
                  onClick={() => this.selectScreen('tender')}>
                  Tender
              </button>
                :
                <button className='pos-menus-functions-btns pos-menus-functions-btns--default'
                  disabled>
                  Tender
              </button>
              }
            </div>
            <div className="pos-menus-screens">
              <button className={(currentScreen == 'food') ? 'pos-menus-screens-btns pos-menus-screens-btns--active' : 'pos-menus-screens-btns pos-menus-screens-btns--default'}
                onClick={() => this.selectScreen('food')}>
                Food
              </button>
            </div>
            <div className="pos-menus-screens">
              <button className={(currentScreen == 'drinks') ? 'pos-menus-screens-btns pos-menus-screens-btns--active' : 'pos-menus-screens-btns pos-menus-screens-btns--default'}
                onClick={() => this.selectScreen('drinks')}>
                Drinks
              </button>
            </div>
          </div>
          <div className="pos-order-screen">
            <div className="pos-order-screen-list">
              <div className="pos-order-screen-list-items">
                <table>
                    {order.map((item, i) => {
                      let price = item.currentPrice ? item.currentPrice.toFixed(2) : '';
                      console.log(item);
                      let temp = item.temp == 'iced' ? 'iced' : ''
                      let selected = 'items'
                      if (i == currentSelected) selected = 'items items-selected'
                      return (
                        <tbody key={i}>
                          <tr onClick={() => this.selectedItem(i, item.type)}
                            className={selected}>
                            {(item.sizeCode) ? <td>{item.sizeCode + ' ' + temp + ' ' + item.name}</td> : <td>{item.name}</td>}
                            <td>{price}</td>
                          </tr>
                          {item.modPrint.length > 0 && 
                            item.modPrint.map((mods, i) => {
                            return (
                              <tr key = {i} className = 'mods'>
                                <td>{mods}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      )
                    })}
                </table>
              </div>
              {(totalScreenView == 'quantity') ? 
              <QuantityScreen
                changeTotalScreen = {this.changeTotalScreen }
              />
              : 
              <TotalScreen
                selectScreen = {this.selectScreen}
                changeTotalScreen = {this.changeTotalScreen }
                removeItem = {this.removeItem}
                openModal = {this.openModal}
                />
              }              
            </div>
            <div className='side-screen'>
              <div className="side-screen-container">
                <div className="side-screen-container-screens">
                  {(currentScreen === 'drinks') && <BuilderScreen />}
                  {(currentScreen === 'tender') && <TenderScreen />}
                  {(currentScreen === 'food') && <FoodScreen />}
                  {(currentScreen === 'orders') && <SavedOrders />}
                  {(currentScreen === 'custom') && <CustomScreen />}
                  {(currentScreen === 'milk') && <MilkScreen />}
                  {(currentScreen === 'syrup') && <SyrupScreen />}
                  {(currentScreen === 'brewed') && <BrewedScreen />}
                  {(currentScreen === 'latte') && <LatteScreen />}
                </div>
                <RightTabs
                  selectScreen = {this.selectScreen }/>
              </div>
              <div className='bottom-tabs'>
                <ul>
                  <li className={(currentScreen == 'brewed') ? 'tabs-group tabs-group--active' : 'tabs-group'}
                    onClick={() => this.selectScreen('brewed')}
                  >
                    Brewed
                  </li>
                  <li className={(currentScreen == 'latte') ? 'tabs-group tabs-group--active' : 'tabs-group'}
                    onClick={() => this.selectScreen('latte')}>
                    Espresso
                  </li>
                </ul>
              </div>
              <div className="bottom-functions">
                <button>Copy Drink</button>
                <button>Add Shot</button>
                <button onClick = {this.newItem}>
                Next Drink
                </button>
              </div>
            </div>
          </div>

          <ProjectClose
            white='white'
            github={this.github}
            href='/'
            link='https://github.com/wongalfonso/pos-calculator'
          />
        </div>
        <div className="pos-sides"></div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    currentScreen: state.home.posCalc.currentScreen,
    currentOrder: state.home.posCalc.currentOrder,
    currentSelected: state.home.posCalc.currentSelected,    
    posModalIsOpen: state.home.posCalc.posModalIsOpen,
    modalType: state.home.posCalc.modalType,
    savedOrders: state.home.posCalc.savedOrders,
    returnedAmount: state.home.posCalc.returnedAmount,
    payment: state.home.posCalc.payment,
    totalScreenView: state.home.posCalc.totalScreenView,
  }
}

export default connect(mapStateToProps)(PosCalc);


