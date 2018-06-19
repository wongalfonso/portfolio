import React, { Component } from "react";

export default class EightKyu extends Component {

  defaultList() {
    return (
    <div></div>
    )
  }

  fullList() {
    return (
     <div></div>
    )
  }
  render() {
    return (
      <div className = "container">
        {(this.props.showlist) ? this.defaultList() : this.fullList()}
      </div>
    )
  }
}