import React, { Component } from 'react';
import { connect } from 'react-redux';


class CustomScreen extends Component {
  render() {
    const { buttons, modifiers } = this.props;    
    let items = buttons ? buttons : [];
    let mods = modifiers ? modifiers : [];
    return (
      <div className = 'custom-screen'>
        <div className = 'custom-screen-row'>
          {mods.map((mod, i) => {
            let cName;
            if (mod.color !== 'empty') {
              cName = `custom-screen-row-btn custom-screen-row-btn--${mod.color}`
            } else {
              cName = `custom-screen-row--empty`
            }
            return (
              <button key = {i} className = {cName}>
                {mod.name}            
              </button>
            )
          })}
          {items.map((item, i) => {
            let cName;
            if (item.color !== 'empty') {
              cName = `custom-screen-row-btn custom-screen-row-btn--${item.color}`
            } else {
              cName = `custom-screen-row--empty`
            }
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
    buttons: state.home.posCalc.customItems,
    modifiers: state.home.posCalc.customModifiers
  }
}

export default connect(mapStateToProps)(CustomScreen);