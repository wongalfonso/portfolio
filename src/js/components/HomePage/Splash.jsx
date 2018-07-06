import React, { Component } from "react";
// import backgroundVid from "./../../../assets/video/backgroundVideo.mp4"

const Splash = () => {  
    return (
      <div className="vidContainer">
      <video id="backgroundVid" loop autoPlay muted>
          <source src={backgroundVid} type="video/mp4" />
        </video>
        <div className="overlay">
          <ul className="overlayText overlayTextName">
            <li>A</li>
            <li>L</li>
            <li>F</li>
            <li>O</li>
            <li>N</li>
            <li>S</li>
            <li>O </li>
            <li>W</li>
            <li>O</li>
            <li>N</li>
            <li>G</li>
          </ul>
          <ul className="overlayText overlayTextTitle">
            <li>F</li>
            <li>R</li>
            <li>O</li>
            <li>N</li>
            <li>T</li>
            <li>E</li>
            <li>N</li>
            <li>D</li>
            <li>D</li>
            <li>E</li>
            <li>V</li>
            <li>E</li>
            <li>L</li>
            <li>O</li>
            <li>P</li>
            <li>E</li>
            <li>R</li>
          </ul>
        </div>        
      </div >
    )
  }

export default Splash;