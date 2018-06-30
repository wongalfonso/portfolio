import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {

  closedList(kyu, i) {
    return (
      <li className="list-group-item list-group-item-action userListLine" key={i}>
        <Link to={`/codewars/${kyu._id}`}>
          <div className="col-12">
            <span className="userListName"
            >
              {kyu.name}
            </span>
            <span className="userListType"
            >{kyu.kyuType}
            </span>
            <span className="userListDate"
            >{kyu.created}
            </span>
          </div>
        </Link>
        <div className="col-4">
          <button className="btn btn-default expandBtn" onClick={() => this.props.expand(i)}>
            Expand
          </button>
        </div>
      </li>
    )
  }

  expandedList(kyu, i) {
    return (
      <div key={i}>
        <button className="btn btn-default" onClick={() => this.props.close(i)}>Hello</button>
      </div>
    )
  }

  render() {
    let { challenges } = this.props;
    return (
      <ul className="list-group col-8" id="userList">
        {challenges.map((kyu, i) => {
          return (
            (kyu.expand) ? this.expandedList(kyu, i) : this.closedList(kyu, i)
          )
        })
        }
      </ul>
    )
  }
}
