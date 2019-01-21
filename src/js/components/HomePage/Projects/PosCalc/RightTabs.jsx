import React, { Component } from 'react';
import { connect } from 'react-redux';

class RightTabs extends Component {
  render() {
    const { currentScreen, currentIngredients } = this.props;
    let decaf, temp, size, syrup, milk, custom, shot;
    if (currentIngredients == undefined) {
      decaf, temp, size, syrup, milk, custom, shot = '';
    } else {
      decaf = currentIngredients.decaf;
      temp = currentIngredients.temp ;
      size = currentIngredients.sizeCode;
      syrup = currentIngredients.syrup;
      milk = currentIngredients.milk ;
      custom = currentIngredients.custom;
      shot = currentIngredients.shot ;

    }
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
          <div className='box'>{decaf}</div>
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
    currentIngredients: state.home.posCalc.currentIngredients
  }
}

export default connect(mapStateToProps)(RightTabs);