import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProjectClose extends Component {
  render() {
    return (
      <div className='project-close'>
        <div className="project-close-git">
          <a href= {this.props.link} target="_blank" 
          onClick={() => this.props.github}
          >
            {(this.props.white == 'white') ? 
            <img className='git-mark' src='/images/GitHubWhite.png' /> 
            : 
            <img className="git-mark" src="/images/GitHub.png" />}
          </a>
        </div>
        <Link to = {this.props.href} className='project-close-btn'>
          <button>
            Back
          </button>
        </Link>
      </div>
    )
  }
}