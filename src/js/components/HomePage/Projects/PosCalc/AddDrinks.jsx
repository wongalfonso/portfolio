import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddDrinks extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className = 'add-drink-page'>
      hello
        {/* <div className="container">
          <div className="header">
            Hello
          </div>
          <div className="add-drinks">
            <div className="add-drinks-form">
              <div className="add-drinks-form-group">
                <label></label>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(AddDrinks);