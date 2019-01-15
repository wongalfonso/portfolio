import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomScreen extends Component {
  render() {
    return (
      <div className = 'custom-screen'>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(CustomScreen);