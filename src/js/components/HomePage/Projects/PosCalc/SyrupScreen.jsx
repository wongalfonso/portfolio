import React, { Component } from 'react'
import { connect } from 'react-redux';

class SyrupScreen extends Component {
  render() {
    const { modifiers, syrups } = this.props;
    const mods = modifiers ? modifiers : [];
    const syrup = syrups ? syrups : [];
    return (
      <div className="syrup-screen">
        <div className="syrup-screen-row">
          {mods.map((mod, i) => {            
            return (
              <button key = {i} className = {`syrup-screen-row-btn syrup-screen-row-btn--${mod.color}`}>
                {mod.name}
              </button>
            )
          })}          
          {syrup.map((item, i) => {
            let cName;
            if (item.color !== 'empty') {
              cName = `syrup-screen-row-btn syrup-screen-row-btn--${item.color}`
            } else {
              cName = `syrup-screen-row--${item.color}`
            }
            console.log(item.color);
            return (
              <button key = {i} className = {cName}>
                {item.name}
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
    modifiers: state.home.posCalc.syrupModifiers,
    syrups: state.home.posCalc.syrupItems
  }
}

export default connect(mapStateToProps)(SyrupScreen);