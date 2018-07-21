import React, { Component } from 'react';
import Active from './../../../../../public/images/ActiveButton.png';
import Menu from './../../../../../public/images/MenuButton.png';


export default class NavBar extends Component {



  render() {
    const { active, isActive } = this.props;
    return (
      <div>
        <ul className='navBar'>
          <li>
            {
              (active === 'splash') ?
                <a href='#vidContainer'>
                  Top
                <img id='topActive' src={Active} />
                </a> :
                <a href='#vidContainer'>
                  <img id='topMenu' src={Menu} onClick = {() => isActive('splash')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'about') ?
                <a href='#aboutPage'>
                  About
                  <img id='aboutActive' src={Active}/>
                </a> :
                <a href='#aboutPage'>
                  <img id='aboutMenu' src={Menu} onClick = {() => isActive('about')}/>
                </a>
            }
          </li>

          <li>
            {
              (active === 'project') ?
                <a href='#projectPage'>
                  Projects
                  <img id = 'projectActive' src={Active} />
                </a> :
                <a href='#projectPage'>
                  <img src={Menu} onClick = {() => isActive('project')}/>
                </a>
            }
          </li>
        </ul>
      </div>
    )
  }
}
