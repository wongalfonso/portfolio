import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ProjectClose from './../../ProjectClose';
import TenderScreen from './TenderScreen';
import DrinksScreen from './DrinksScreen';
import { getMenu } from './PosCalcActions';

class PosCalc extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMenu())
  }
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Change Modal'
    })
  }

  render() {
    const { currentScreen } = this.props;
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
              <button className='pos-menus-functions-btns pos-menus-functions-btns--default'>Order</button>
              <button className='pos-menus-functions-btns pos-menus-functions-btns--default'>Tender</button>
            </div>
            <div className="pos-menus-screens">
              <button className='pos-menus-screens-btns pos-menus-screens-btns--default'>Food</button>
              <button className='pos-menus-screens-btns pos-menus-screens-btns--default'>Drinks</button>
            </div>
          </div>
          <div className="pos-order-screen">
            <div className="pos-order-screen-list">
              <table className='pos-order-screen-list-items'>
                <tbody>
                  <tr>
                    <td>Yes</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
              <table className='pos-order-screen-list-total'>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td></td>
                  </tr>                  
                  <tr className='final-total'>
                    <td>TOTAL DUE</td>
                    <td>$</td>
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
  console.log(state);
  return {
    currentScreen: state.posCalc.currentScreen
  }
}

export default connect(mapStateToProps)(PosCalc);


