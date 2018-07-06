import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChangeCalc from "./projects/ChangeCalc"
import Modal from "react-modal";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    // this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

//   componentDidMount() {
//     ReactDOM.findDOMNode(this.refs.text).addEventListener('scroll', this.listenScrollEvent);
// }

// componentWillUnmount() {
//     ReactDOM.findDOMNode(this.refs.text).removeEventListener('scroll', this.listenScrollEvent);
// }

listenScrollEvent() {
    console.log('Scroll event detected!');
}

  render() {
    return (
      <div className="projectsPage">
        <div className="row">
        </div>
        <div className="container">
          <div className="col-12 projectsHeader">
            <div className="title">Projects</div>
          </div>
          <div className="row" id="calcContainer">
            
              <div className="infoDiv" id = "infoDiv">
                <p>
                  This is a simple React form that allos you to enter the total amount of an item and also enter the amount the person used to pay for that amount. This is not a form that is meant to be used for online shopping due to the fact that exact totals are usually charged, this is though meant to be used as a cash register form where amounts such as a whole Dollars can be accepted to pay for the item.
                </p>
              </div>
            
                <div id="changeCalcImage" className="projectImages" onFocus = {this.listenScrollEvent.bind(this)}>
                </div>
          </div>
        </div>

      </div>
    )
  }
}