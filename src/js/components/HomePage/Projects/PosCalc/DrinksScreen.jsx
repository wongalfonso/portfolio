import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './PosCalcActions';

class DrinksScreen extends Component {
  constructor(props) {
    super(props);
    this.addDrink = this.addDrink.bind(this);
    this.changeDrinkSize = this.changeDrinkSize.bind(this);
  }

  addDrink(drink) {    
    const { dispatch, currentOrder, drinkSize } = this.props;    

    dispatch(addItem(currentOrder, drink));    
  }

  changeDrinkSize() {
    const { dispatch } = this.props;
    dispatch()
  }

  render() {
    const { coffees, sizes, drinkSize } = this.props;
    const hotCoffees = coffees.hotCoffee ? coffees.hotCoffee : [];
    const lattes = coffees.latte ? coffees.latte : []
    const size = sizes ? sizes : []
    return (
      <div className = 'drinks-screen'>        
        <div className="drinks-screen-row">
          {hotCoffees.map((coffee, i ) => {
            return (
              <button className = 'coffee-btns coffee-btns-coffee' 
                key = {i}
                onClick = {() => this.addDrink(coffee)}>
                {coffee.name}
              </button>
            )
          })}
        </div>
        <div className="drinks-screen-row">
          {lattes.map((latte, i ) => {
            return (
              <button className = 'coffee-btns coffee-btns-latte'
                key = {i}
                onClick = {() => this.addDrink(latte)}>
                {latte.name}
              </button>
            )
          })}
        </div>
        <div className="drinks-screen-row">
          <div className="drinks-screen-row-break">Choose a Size</div>
        </div>
        <div className="drinks-screen-row">
          {size.map((item, i ) => {
            let selected = 'coffee-btns coffee-btns-size'
            if (item == drinkSize) selected = 'coffee-btns coffee-btns-size coffee-btns-size--selected'
            return (
              <button className = {selected} key = {i}>{item}</button>
            )
          })}
          {/* <button className = 'coffee-btns coffee-btns-size'>
            Tall
          </button>
          <button className = 'coffee-btns coffee-btns-size'>
            Grande
          </button>
          <button className = 'coffee-btns coffee-btns-size'>
            Venti
          </button> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    coffees: state.posCalc.coffees,
    currentOrder: state.posCalc.currentOrder,
    drinkSize: state.posCalc.drinkSize,
    sizes: state.posCalc.sizes
  }
}

export default connect(mapStateToProps)(DrinksScreen);

