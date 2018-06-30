import React, { Component } from "react";
import backgroundVid from "./../../../assets/Video/backgroundVideo.mp4"

export default class Splash extends Component {
  render() {
    return (
      <div className = "vidContainer">
        <div id="overlay"></div>     
        <video id = "backgroundVid" loop autoPlay muted>
          <source src = {backgroundVid} type ="video/mp4" />
        </video>        
      </div>
    )
  }
}