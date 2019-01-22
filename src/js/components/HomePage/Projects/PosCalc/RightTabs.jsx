import React, { Component } from 'react';
import { connect } from 'react-redux';

class RightTabs extends Component {
  render() {
    const { currentScreen, currentOrder, currentSelected } = this.props;
    let selected = currentOrder && currentOrder[currentSelected];
    let mods = selected && selected.modifications && selected.modifications[0];
    let temp = selected && selected.temp ? selected.temp : 'hot';
    let size = selected && selected.sizeCode ? selected.sizeCode : '';
    let decaf = mods && mods.decaf ? mods.decaf : false;
    let shot = mods && mods.shot ? mods.shot : '';
    let syrup = mods && mods.syrup ? mods.syrup : '';
    let milk = mods && mods.milk ? mods.milk : '';
    let custom = mods && mods.custom ? mods.custom : ''; 
    return (
      <div className='right-tabs'>
      <ul>
        <li className={(currentScreen == 'drinks') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('drinks')}>
          <div>
            {(temp == 'iced') ?
              <div className='small-box'>√</div>
              : 
              <div className='small-box'></div>
            }
            Iced
          </div>
          <div>Decaf
            {(decaf === true) ?
              <div className='box'>X</div>
              :
              <div className='box'></div>
            }
          </div>
          <div>Shots
          <div className='box'>{shot}</div>
          </div>
          <div>Size
          <div className='box'>{size}</div>
          </div>
        </li>
        <li className={(currentScreen == 'syrup') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('syrup')}
        >
          Syrup
        <div className='box'>{syrup}</div>
        </li>
        <li className={(currentScreen == 'milk') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('milk')}>
          Milk
        <div className='box'>{milk}</div>
        </li>
        <li className={(currentScreen == 'custom') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('custom')}
        >
          Custom
        <div className='box'>{custom}</div>
        </li>
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.home.posCalc.currentScreen,
    currentOrder: state.home.posCalc.currentOrder,
    currentSelected: state.home.posCalc.currentSelected
  }
}

export default connect(mapStateToProps)(RightTabs);