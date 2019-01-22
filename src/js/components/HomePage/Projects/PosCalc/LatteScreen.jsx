import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from './PosCalcActions';


class LatteScreen extends Component {
  constructor(props) {
    super(props);
    this.addDrink = this.addDrink.bind(this);
  }

  addDrink(drink, type) {
    const { dispatch, currentOrder, currentSelected, prepDrink } = this.props;
    // console.log(prepDrink);
    dispatch(addItem(currentOrder, currentSelected, prepDrink, drink, type));
  }

  render() {
    const { espresso, latte, mochas } = this.props;
    const esp = espresso ? espresso : [];
    const lat = latte ? latte : [];
    const moc = mochas ? mochas : [];
    return (
      <div className="espresso-screen">
        <div className="espresso-screen-row">
          {esp.map((espr, i) => {
            console.log(espr)
            let cName;
            if (espr.color == 'empty') {
              cName = 'espresso-screen-row--empty'
            } else {
              cName = `espresso-screen-row-btn espresso-screen-row-btn--${espr.color}`
            }
            if (espr.name == 'americano') {
              return (
                <button className={cName}
                  key={i}
                  onClick={() => this.addDrink(espr, 'ameri')}>
                  {espr.name}
                </button>
              )
            } else {
              return (
                <button className={cName}
                  key={i}
                  onClick={() => this.addDrink(espr, 'espresso')}>
                  {espr.name}
                </button>
              )
            }
          })}
          {lat.map((latt, i) => {
            let cName;
            if (latt.color == 'empty') {
              cName = 'espresso-screen-row--empty'
            } else {
              cName = `espresso-screen-row-btn espresso-screen-row-btn--${latt.color}`
            }
            return (
              <button className={cName}
                key={i}
                onClick={() => this.addDrink(latt, 'latte')}>
                {latt.name}
              </button>
            )
          })}
          {moc.map((moch, i) => {
            let cName;
            if (moch.color == 'empty') {
              cName = 'espresso-screen-row--empty'
            } else {
              cName = `espresso-screen-row-btn espresso-screen-row-btn--${moch.color}`
            }
            return (
              <button className={cName}
                key={i}
                onClick={() => this.addDrink(moch, 'latte')}>
                {moch.name}
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
    espresso: state.home.posCalc.espresso,
    latte: state.home.posCalc.latte,
    mochas: state.home.posCalc.mochas,
    currentOrder: state.home.posCalc.currentOrder,
    prepDrink: state.home.posCalc.prepDrink,
    currentSelected: state.home.posCalc.currentSelected
  }
}

export default connect(mapStateToProps)(LatteScreen);