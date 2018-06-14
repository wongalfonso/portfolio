import React, { Component } from "react";

export default class EightKyu extends Component {

  defaultList() {
    return (
      <tr>
        <td>8 kyu</td>
        <td><button>Show List</button></td>
      </tr>
    )
  }

  fullList() {
    return (
      <tr>
        <td>8 kyu</td>
        <td><button>Show List</button></td>
      </tr>
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