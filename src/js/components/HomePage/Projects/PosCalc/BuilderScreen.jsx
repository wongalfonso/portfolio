import React, { Component } from 'react'
import { connect } from 'react-redux';
import { modifyDrink } from './PosCalcActions';

class BuilderScreen extends Component {
  constructor(props) {
    super(props);
    this.changeDrink = this.changeDrink.bind(this);
  }

  changeDrink(size, temp, blonde) {
    const { dispatch, currentOrder, currentSelected, orderTotal } = this.props;
    console.log(blonde);
    dispatch(modifyDrink(currentOrder, currentSelected, orderTotal, size, temp, blonde));
  }
  render() {
    const { currentOrder, currentSelected, decaf, shots } = this.props;        
    let selected = currentOrder && currentOrder[currentSelected];
    let mods = selected && selected.modifications && selected.modifications[0];
    let temp = selected && selected.temp ? selected.temp : 'hot';
    let size = selected && selected.size ? selected.size : 'grande';
    console.log(mods);
    let blonde = mods && mods.blonde ? mods.blonde : false;
    const decafMod = decaf ? decaf : [];
    const shotsMod = shots ? shots : [];
    return (
      <div className="builder-screen">
        <div className="builder-screen-row">
          {decafMod.map((decaf, i) => {
            // console.log(decaf);
            let cName;
            if (decaf.color == 'empty') {
              cName = 'builder-screen-row--empty'
            } else {
              cName = `builder-screen-row-btn builder-screen-row-btn--${decaf.color}`
            }
            if (decaf.name === 'iced') {
              if (temp == 'iced') {
                return (
                  <button onClick = {() =>this.changeDrink(size,'hot', blonde)} key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {decaf.name}
                  </button>  
                )
              } else {
                return (
                  <button onClick = {() =>this.changeDrink(size, 'iced', blonde)} key = {i} className = {cName}>
                  {decaf.name}
                  </button>  
                )
              }
            } else if (decaf.name == 'blonde') {
              if (blonde) {
                return (
                  <button onClick = {() =>this.changeDrink(size, temp, false)} key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {decaf.name}
                  </button>  
                )
              } else {
                return (
                  <button onClick = {() =>this.changeDrink(size, temp, true)} key = {i} className = {cName}>
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
            if (size == shot.name) {
              return (
                <button key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {shot.name}
                </button>
              )
            }
            if (shot.type == 'size') {
              return (
                <button key = {i} onClick = {() => this.changeDrink(shot.name, temp, blonde)} className = {`builder-screen-row-btn builder-screen-row-btn--${shot.color}`}>
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
    orderTotal: state.home.posCalc.orderTotal,
    currentSelected: state.home.posCalc.currentSelected,
    currentOrder: state.home.posCalc.currentOrder,
    currentIngredients: state.home.posCalc.currentIngredients,
    currentTemp: state.home.posCalc.currentTemp,
    blonde: state.home.posCalc.blonde,

  }
}

export default connect(mapStateToProps)(BuilderScreen);