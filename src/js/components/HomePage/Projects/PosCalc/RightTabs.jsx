import React, { Component } from 'react';
import { connect } from 'react-redux';

class RightTabs extends Component {
  render() {
    const { currentScreen } = this.props;
    return (
      <div className='right-tabs'>
      <ul>
        <li className={(currentScreen == 'drinks') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('drinks')}>
          <div>
            <div className='small-box'></div>
            Iced
        </div>
          <div>Decaf
          <div className='box'></div>
          </div>
          <div>Shots
          <div className='box'></div>
          </div>
          <div>Size
          <div className='box'></div>
          </div>
        </li>
        <li className={(currentScreen == 'syrup') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('syrup')}
        >
          Syrup
        <div className='box'></div>
        </li>
        <li className={(currentScreen == 'milk') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('milk')}>
          Milk
        <div className='box'></div>
        </li>
        <li className={(currentScreen == 'custom') ? 'tabs-group tabs-group--active' : 'tabs-group'}
          onClick={() => this.props.selectScreen('custom')}
        >
          Custom
        <div className='box'></div>
        </li>
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.home.posCalc.currentScreen
  }
}

export default connect(mapStateToProps)(RightTabs);