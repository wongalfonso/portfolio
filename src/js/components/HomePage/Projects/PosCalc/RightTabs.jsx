import React, { Component } from 'react';
import { connect } from 'react-redux';

class RightTabs extends Component {
  render() {
    const { currentScreen, currentIngredients } = this.props;
    return (
      <div className='right-tabs'>
      <ul>
        <li className={(currentScreen == 'drinks') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('drinks')}>
          <div>
            {(currentIngredients.iced == 'yes') ?
              <div className='small-box'>√</div>
              : 
              <div className='small-box'></div>
            }
            Iced
          </div>
          <div>Decaf
          <div className='box'></div>
          </div>
          <div>Shots
          <div className='box'>{currentIngredients.shot}</div>
          </div>
          <div>Size
          <div className='box'>{currentIngredients.sizeCode}</div>
          </div>
        </li>
        <li className={(currentScreen == 'syrup') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('syrup')}
        >
          Syrup
        <div className='box'>{currentIngredients.syrup}</div>
        </li>
        <li className={(currentScreen == 'milk') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('milk')}>
          Milk
        <div className='box'>{currentIngredients.milk}</div>
        </li>
        <li className={(currentScreen == 'custom') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('custom')}
        >
          Custom
        <div className='box'>{currentIngredients.custom}</div>
        </li>
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.home.posCalc.currentScreen,
    currentIngredients: state.home.posCalc.currentIngredients
  }
}

export default connect(mapStateToProps)(RightTabs);