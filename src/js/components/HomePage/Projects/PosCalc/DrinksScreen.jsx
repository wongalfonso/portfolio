import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './PosCalcActions';

class DrinksScreen extends Component {
  constructor(props) {
    super(props);
    this.addDrink = this.addDrink.bind(this);
  }

  addDrink(drink) {
    const { dispatch } = this.props;
    dispatch(addItem(drink));
  }
  render() {
    const { coffees } = this.props;
    const hotCoffees = coffees.hotCoffee ? coffees.hotCoffee : [];
    const lattes = coffees.latte ? coffees.latte : []
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
          <button className = 'coffee-btns coffee-btns-size'>
            Tall
          </button>
          <button className = 'coffee-btns coffee-btns-size'>
            Grande
          </button>
          <button className = 'coffee-btns coffee-btns-size'>
            Venti
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    coffees: state.posCalc.coffees
  }
}

export default connect(mapStateToProps)(DrinksScreen);

