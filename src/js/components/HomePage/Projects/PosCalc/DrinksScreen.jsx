import React, { Component } from 'react';
import { connect } from 'react-redux';

class DrinksScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { coffees } = this.props;
    return (
      <div className = 'drinks-screen'>

      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    coffees: state.posCalc.coffees
  }
}

export default connect(mapStateToProps)(DrinksScreen);

