import React, { Component } from 'react';
import Active from './../../../../../public/images/ActiveButton.png';
import Menu from './../../../../../public/images/MenuButton.png';


export default class NavBar extends Component {



  render() {
    const { active, scroll } = this.props;
    return (
      <div>
        <ul className='navBar'>
          <li>
            {
              (active === 'splash') ?
                <a className = 'pages'>
                  Top
                <img id='topActive' src={Active} onClick = {scroll.bind(this, 'splash-page')}/>
                </a> :
                <a >
                  <img id='topMenu' src={Menu} onClick = {scroll.bind(this,'splash-page')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'about') ?
                <a className = 'pages'>
                  About
                  <img id='aboutActive' src={Active} onClick = {scroll.bind(this, 'aboutPage')}/>
                </a> :
                <a >
                  <img id='aboutMenu' src={Menu} onClick = {scroll.bind(this, 'aboutPage')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'project') ?
                <a className = 'pages'>
                  Projects
                  <img id = 'projectActive' src={Active} onClick = {() => scroll.bind(this, 'projectPage')}/>
                </a> :
                <a >
                  <img src={Menu} onClick = {scroll.bind(this, 'projectPage')}/>
                </a>
            }
          </li>
        </ul>
      </div>
    )
  }
}
