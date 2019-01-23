import React, { Component } from 'react'
import { connect } from 'react-redux';
import { modifyDrink } from './PosCalcActions';

class BuilderScreen extends Component {
  constructor(props) {
    super(props);
    this.changeDrink = this.changeDrink.bind(this);
  }

  changeDrink(size, temp, blonde, decaf) {
    const { dispatch, currentOrder, currentSelected, orderTotal } = this.props;
    dispatch(modifyDrink(currentOrder, currentSelected, orderTotal, size, temp, blonde, decaf));
  }
  render() {
    const { currentOrder, currentSelected, decafArr, shotsArr } = this.props;        
    let selected = currentOrder && currentOrder[currentSelected];
    let mods = selected && selected.modifications && selected.modifications[0];
    let temp = selected && selected.temp ? selected.temp : 'hot';
    let size = selected && selected.size ? selected.size : 'grande';
    let blonde = mods && mods.blonde ? mods.blonde : '';
    let decaf = mods && mods.decaf ? mods.decaf : false;
    const decafMod = decafArr ? decafArr : [];
    const shotsMod = shotsArr ? shotsArr : [];
    return (
      <div className="builder-screen">
        <div className="builder-screen-row">
          {decafMod.map((decafBtn, i) => {
            // console.log(decafBtn);
            let cName;
            if (decafBtn.color == 'empty') {
              cName = 'builder-screen-row--empty'
            } else {
              cName = `builder-screen-row-btn builder-screen-row-btn--${decafBtn.color}`
            }
            if (decafBtn.name === 'iced') {
              if (temp == 'iced') {
                return (
                  <button onClick = {() =>this.changeDrink(size,'hot', blonde, decaf)} key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {decafBtn.name}
                  </button>  
                )
              } else {
                return (
                  <button onClick = {() =>this.changeDrink(size, 'iced', blonde, decaf)} key = {i} className = {cName}>
                  {decafBtn.name}
                  </button>  
                )
              }
            } else if (decafBtn.name == 'blonde') {
              if (blonde) {
                return (
                  <button onClick = {() =>this.changeDrink(size, temp, {name: blonde, type: false}, decaf)} key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {decafBtn.name}
                  </button>  
                )
              } else {
                return (
                  <button onClick = {() =>this.changeDrink(size, temp, {name: blonde, type: true}, decaf)} key = {i} className = {cName}>
                  {decafBtn.name}
                  </button>  
                )
              }
            } else if (decafBtn.name == 'decaf' || decafBtn.name == '1/2 cecaf' ||decafBtn.name == '2/3 decaf' || decafBtn.name == '1/3 decaf') {
              if (decaf == decafBtn.name) {
                return (
                  <button onClick = {() =>this.changeDrink(size, temp, blonde, {name: decafBtn.name, type: false})} key = {i} className = 'builder-screen-row-btn builder-screen-row-btn--active'>
                  {decafBtn.name}
                  </button>  
                )
              } else {
                return (
                  <button onClick = {() =>this.changeDrink(size, temp, blonde, {name: decafBtn.name, type: true})} key = {i} className = {cName}>
                  {decafBtn.name}
                  </button>  
                )
              }
            }
            return (
              <button key = {i} className = {cName}>
                {decafBtn.name}
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
    decafArr: state.home.posCalc.decafArr,
    shotsArr: state.home.posCalc.shotsArr,
    orderTotal: state.home.posCalc.orderTotal,
    currentSelected: state.home.posCalc.currentSelected,
    currentOrder: state.home.posCalc.currentOrder,
    currentIngredients: state.home.posCalc.currentIngredients,
    currentTemp: state.home.posCalc.currentTemp,
    blonde: state.home.posCalc.blonde,

  }
}

export default connect(mapStateToProps)(BuilderScreen);