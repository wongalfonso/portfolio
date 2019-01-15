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
            let cName = 'custom-screen-row-btn custom-screen-row-btn--mod'
            return (
              <button key = {i} className = {cName}>
                {mod.name}            
              </button>
            )
          })}
        </div>
        <div className = 'custom-screen-row items'>
          {items.map((item, i) => {
            console.log(item.color);
            return (
              <button key = {i} className = {`custom-screen-row-btn custom-screen-row-btn--${item.color}`}>
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