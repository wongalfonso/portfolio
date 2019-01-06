import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bakery, breakfast } = this.props;
    const baked = bakery ? bakery : [];
    const sandwhiches = breakfast ? breakfast : []
    return (
      <div className = 'food-screen'>        
        <div className="food-screen-row">
          {baked.map((bake, i ) => {
            return (
              <button className = 'food-btns food-btns-bakery' 
                key = {i}>{bake.name}</button>
            )
          })}
        </div>
        <div className="food-screen-row">
          {sandwhiches.map((sandwhich, i ) => {
            return (
              <button className = 'food-btns food-btns-breakfast'
                key = {i}>{sandwhich.name}</button>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    bakery: state.posCalc.bakery,
    breakfast: state.posCalc.breakfast
  }
}

export default connect(mapStateToProps)(FoodScreen);

