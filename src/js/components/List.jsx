import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class List extends Component {


  render() {
    let { challenges } = this.props;
    if (challenges === undefined) challenges = []

    return (
      <ul className="list-group col-12" id = "userList">
        {challenges.map((kyu, i) => {
          console.log(kyu);
          return (
            <Link to={`/codewars/${kyu._id}`} key={i}>
              <li className="list-group-item list-group-item-action userListLine">
                <div className="col-12">
                  <span   className="userListName" 
                          style={{ display: "inlineBlock" }}>
                          {kyu.name}
                  </span>
                  <span   className="userListType" 
                          style={{ display: "inlineBlock" }}>{kyu.kyuType}
                  </span>
                  <span   className="userListDate" 
                          style={{ display: "inlineBlock" }}>{kyu.created}
                  </span>
                </div>

              </li>
            </Link>
          )
        })
        }
      </ul>
    )
  }
}