import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem} from './PosCalcActions';

class BrewedScreen extends Component {
  constructor(props) {
    super(props);
    this.addDrink = this.addDrink.bind(this);
  }

  addDrink(drink) {    
    const { dispatch, currentOrder, drinkSize} = this.props;    
    dispatch(addItem(currentOrder, drink, 'brewed', drinkSize));    
  }

  render() {
    const { brewed } = this.props;
    const pourOver = brewed.pour_over ? brewed.pour_over : [];
    const icedCoffee = brewed.iced_coffee ? brewed.iced_coffee : [];
    const coldBrew = brewed.cold_brew ? brewed.cold_brew : [];
    const coffee = brewed.coffees ? brewed.coffees : [];
    return (
      <div className ='brewed-screen'>        
        <div className="brewed-screen-row">
          {pourOver.map((pour, i ) => {
            let cName;
            if (pour.color == 'empty') {
              cName = 'brewed-screen-row--empty'
            } else {
              cName = `brewed-screen-row-btn brewed-screen-row-btn--${pour.color}` 
            }
            return (
              <button className = {cName} 
                key = {i}
                onClick = {() => this.addDrink(pour)}>
                {pour.name}
              </button>
            )
          })}
          {icedCoffee.map((iced, i ) => {
            let cName;
            if (iced.color == 'empty') {
              cName = 'brewed-screen-row--empty'
            } else {
              cName = `brewed-screen-row-btn brewed-screen-row-btn--${iced.color}` 
            }
            return (
              <button className = {cName} 
                key = {i}
                onClick = {() => this.addDrink(iced)}>
                {iced.name}
              </button>
            )
          })}
          {coldBrew.map((cb, i ) => {
            let cName;
            if (cb.color == 'empty') {
              cName = 'brewed-screen-row--empty'
            } else {
              cName = `brewed-screen-row-btn brewed-screen-row-btn--${cb.color}` 
            }
            return (
              <button className = {cName} 
                key = {i}
                onClick = {() => this.addDrink(cb)}>
                {cb.name}
              </button>
            )
          })}
          {coffee.map((coff, i ) => {
            let cName;
            if (coff.color == 'empty') {
              cName = 'brewed-screen-row--empty'
            } else {
              cName = `brewed-screen-row-btn brewed-screen-row-btn--${coff.color}` 
            }
            return (
              <button className = {cName} 
                key = {i}
                onClick = {() => this.addDrink(coff)}>
                {coff.name}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {      
  return {
    brewed: state.home.posCalc.brewed,
  }
}

export default connect(mapStateToProps)(BrewedScreen);

