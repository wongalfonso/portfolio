import React, { Component } from 'react'
import { connect } from 'react-redux';
import { modifyDrink } from './PosCalcActions';

class BuilderScreen extends Component {
  constructor(props) {
    super(props);
    this.changeDrink = this.changeDrink.bind(this);
  }

  changeDrink(size, temp) {
    console.log(size);
    const { dispatch, currentOrder, currentSelected, currentIngredients, currentTemp, drinkSize } = this.props;
    let currentSize = !size ? drinkSize : size;
    let drinkTemp = !temp ? currentTemp : temp;
    dispatch(modifyDrink(currentSize, currentOrder, currentSelected, currentIngredients, drinkTemp));
  }
  render() {
    const { decaf, shots, drinkSize, currentTemp } = this.props;
    const decafMod = decaf ? decaf : [];
    const shotsMod = shots ? shots : [];
    return (
      <div className="builder-screen">
        <div className="builder-screen-row">
          {decafMod.map((decaf, i) => {
            let cName;
            if (decaf.color == 'empty') {
              cName = 'builder-screen-row--empty'
            } else {
              cName = `builder-screen-row-btn builder-screen-row-btn--${decaf.color}`
            }
            if (decaf.name === 'iced') {
              if (currentTemp == 'iced') {
                return (
                  <button onClick = {() =>this.changeDrink(drinkSize,'hot')} key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {decaf.name}
                  </button>  
                )
              } else {
                return (
                  <button onClick = {() =>this.changeDrink(drinkSize, 'iced')} key = {i} className = {cName}>
                  {decaf.name}
                  </button>  
                )
              }
            }
            return (
              <button key = {i} className = {cName}>
                {decaf.name}
              </button>
            )
          })}
          {shotsMod.map((shot, i) => {
            let cName;
            if (shot.color == 'empty') {
              cName = 'builder-screen-row--empty'
              return (
                <button key = {i} className = {cName} disabled>
                  {shot.name}
                </button>
              )
            } else {
              cName = `builder-screen-row-btn builder-screen-row-btn--${shot.color}`
            }
            if (drinkSize == shot.name) {
              return (
                <button key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {shot.name}
                </button>
              )
            }
            if (shot.type == 'size') {
              return (
                <button key = {i} onClick = {() => this.changeDrink(shot.name)} className = {`builder-screen-row-btn builder-screen-row-btn--${shot.color}`}>
                  {shot.name}
                </button>
              )
            }
            return (
              <button key = {i} className = {cName}>
                {shot.name}
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
    decaf: state.home.posCalc.decaf,
    shots: state.home.posCalc.shots,
    drinkSize: state.home.posCalc.drinkSize,
    currentSelected: state.home.posCalc.currentSelected,
    currentOrder: state.home.posCalc.currentOrder,
    currentIngredients: state.home.posCalc.currentIngredients,
    currentTemp: state.home.posCalc.currentTemp
  }
}

export default connect(mapStateToProps)(BuilderScreen);