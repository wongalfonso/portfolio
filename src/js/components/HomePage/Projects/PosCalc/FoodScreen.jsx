import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './PosCalcActions';

class FoodScreen extends Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
  }


  addFood(food) {
    const { dispatch, currentOrder } = this.props;    
    dispatch(addItem(currentOrder, food, 'food'));
  }

  render() {
    const { bakery, breakfast } = this.props;
    const baked = bakery ? bakery : [];
    const sandwhiches = breakfast ? breakfast : []     
    return (
      <div className = 'food-screen'>        
        <div className="food-screen-row">
          {baked.map((bake, i ) => {
            let cName;
            if (bake.color == 'empty') {
              cName = 'brewed-screen-row--empty'
            } else {
              cName = `brewed-screen-row-btn brewed-screen-row-btn--${bake.color}` 
            }
            return (
              <button className = {cName} 
                key = {i}
                onClick = {() => this.addFood(bake)}>
                {bake.name}
              </button>
            )
          })}
          {sandwhiches.map((sandwhich, i ) => {
            let cName;
            if (sandwhich.color == 'empty') {
              cName = 'brewed-screen-row--empty'
            } else {
              cName = `brewed-screen-row-btn brewed-screen-row-btn--${sandwhich.color}` 
            }
            return (
              <button className = {cName}
                key = {i}
                onClick = {() => this.addFood(sandwhich)}>{sandwhich.name}</button>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    bakery: state.home.posCalc.bakery,
    breakfast: state.home.posCalc.breakfast,
    currentOrder: state.home.posCalc.currentOrder
  }
}

export default connect(mapStateToProps)(FoodScreen);

