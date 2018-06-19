import React, { Component } from "react";
import EightKyu from "./EightKyu";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    }
    this.handleList = this.handleList.bind(this);
  }

  handleList() {
    this.setState({
      showList: true
    })
  }
  
  render() {
    return (
      <div className = "container">
        <table className = "table">
          <tbody>            
              <EightKyu
              expandList = {this.handleList}/>            
            <tr>
              <td>7 kyu</td>
              <td><button>Show List</button></td>
            </tr>
            <tr>
              <td>6 kyu</td>
              <td><button>Show List</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}