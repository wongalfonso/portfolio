import React, { Component } from 'react';
import { connect } from 'react-redux';

class MilkScreen extends Component {
  render() {
    const { modifiers, free, payed } = this.props;
    console.log(modifiers, free, payed);
    const mods = modifiers ? modifiers : [];
    const nonPriced = free ? free : [];
    const priced = payed ? payed : [];
    return (
      <div className="milk-screen">
        <div className="milk-screen-group">
          <div className="milk-screen-label">
            MILK & SUBSTITUTES
          </div>
          <div className="milk-screen-row">
            <div className='milk-screen-row--empty'></div>
            <div className='milk-screen-row--empty'></div>
            {priced.map((pay, i) => {
              return (
                <button key={i}
                  className={`milk-screen-row-btn milk-screen-row-btn--${pay.color}`}>
                  {pay.name}
                </button>
              )
            })}
          </div>
        </div>
        <div className="milk-screen-group">
          <div className="milk-screen-label">
            NON_PRICED CONDIMENT DAIRY
            </div>
          <div className="milk-screen-row">
            {mods.map((mod, i) => {
              return (
                <button key={i}
                  className={`milk-screen-row-btn milk-screen-row-btn--${mod.color}`}>
                  {mod.name}
                </button>
              )
            })}
            {nonPriced.map((item, i) => {
              return (
                <button key={i}
                  className={`milk-screen-row-btn milk-screen-row-btn--${item.color}`}>
                  {item.name}
                </button>
              )
            })}
            <div className='milk-screen-row--empty'></div>
            <div className='milk-screen-row--empty'></div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modifiers: state.home.posCalc.milkModifiers,
    free: state.home.posCalc.milkFree,
    payed: state.home.posCalc.milkPayed
  }
}

export default connect(mapStateToProps)(MilkScreen);