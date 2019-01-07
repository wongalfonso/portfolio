import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ProjectClose from './../../ProjectClose';
import TenderScreen from './TenderScreen';
import DrinksScreen from './DrinksScreen';
import FoodScreen from './FoodScreen';
import { getMenu, changeScreen } from './PosCalcActions';

class PosCalc extends Component {
  constructor(props) {
    super(props);
    this.selectScreen = this.selectScreen.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMenu())
  }

  selectScreen(screen) {
    const { dispatch } = this.props;
    dispatch(changeScreen(screen));
  }
  selectedItem(key) {
    const { dispatch } = this.props;
    dispatch(selected(key))
  }


  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Change Modal'
    })
  }

  render() {
    const { currentScreen, currentOrder, currentSelected, subTotal, orderTotal } = this.props;
    let sub = subTotal ? subTotal : 0;
    let total = orderTotal ? orderTotal : 0;
    let order = currentOrder ? currentOrder : null;
    return (
      <div id="posCalcProject">
        <div className="container pos-container">
          <div className="pos-header">
            <header>
              Point of Sale Calculator
            </header>
          </div>
          <div className="pos-menus">
            <div className="pos-menus-functions">
              {/* <button className='pos-menus-functions-btns pos-menus-functions-btns--default'
              onClick = {this.selectScreen()}>
              Order
              </button> */}
              <button className='pos-menus-functions-btns pos-menus-functions-btns--default'
              onClick = {() => this.selectScreen('tender')}>
              Tender
              </button>
            </div>
            <div className="pos-menus-screens">
              <button className='pos-menus-screens-btns pos-menus-screens-btns--default' 
              onClick = {() => this.selectScreen('food')}>
              Food
              </button>
              <button className='pos-menus-screens-btns pos-menus-screens-btns--default' 
              onClick = {() => this.selectScreen('drinks')}>
              Drinks
              </button>
            </div>
          </div>
          <div className="pos-order-screen">
            <div className="pos-order-screen-list">
              <div className="pos-order-screen-list-items">
                <table>
                  <tbody>
                    {order.map((item, i) => {                      
                      let selected = 'items'
                      if (i == currentSelected) selected = 'items items-selected'
                      return (
                        <tr key = {i} 
                          onClick = {() => this.selectedItem(i)}
                          className = {selected}>
                          <td>{item.name}</td>
                          <td>{item.price.toFixed(2)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>              
              </div>
              <table className='pos-order-screen-list-total'>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td></td>
                    <td>{sub.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td></td>
                    <td> 7.75 %</td>
                  </tr>                  
                  <tr className='final-total'>
                    <td>TOTAL DUE</td>
                    <td>$</td>
                    <td>{total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="pos-order-screen-voids">
                <button className='pos-order-screen-voids-btns void'>Void Item</button>
                <button className='pos-order-screen-voids-btns cancel'>Cancel</button>
                <button className='pos-order-screen-voids-btns save'>Save Order</button>
              </div>
            </div>
            <div className = 'side-screen'>
            {(currentScreen === 'drinks') && <DrinksScreen />}
            {(currentScreen === 'tender') && <TenderScreen />}
            {(currentScreen === 'food') && <FoodScreen />}
            </div>

          </div>
          <ProjectClose
            github={this.github}
            close={this.props.closeModal}
          />
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {  
  return {
    currentScreen: state.posCalc.currentScreen,
    currentOrder: state.posCalc.currentOrder,
    currentSelected: state.posCalc.currentSelected,
    subTotal: state.posCalc.subTotal,
    orderTotal: state.posCalc.orderTotal
  }
}

export default connect(mapStateToProps)(PosCalc);


