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
    console.log(brewed);
    const pourOver = brewed.pour_over ? brewed.pour_over : [];

    // const hotCoffees = coffees.hotCoffee ? coffees.hotCoffee : [];
    // const lattes = coffees.latte ? coffees.latte : []
    // const size = sizes ? sizes : []
    return (
      <div className ='brewed-screen'>        
        <div className="brewed-screen-row">
          {pourOver.map((pour, i ) => {
            console.log(pour.color);
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
        </div>
        <div className="drinks-screen-row">
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

