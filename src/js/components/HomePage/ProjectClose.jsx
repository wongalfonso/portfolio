import React, { Component } from 'react'


export default class ProjectClose extends Component {
  render() {
    return (
      <div className='project-close'>
        <div className="project-close-git">
          <a href="https://github.com/wongalfonso/React-Change-Calculator" target="_blank" 
          onClick={() => this.props.github}>
            {(this.props.white == 'white') ? <img className='git-mark' src='/images/GitHubWhite.png' /> : <img className="git-mark" src="/images/GitHub.png" />}
          </a>
        </div>
        <button className='project-close-btn'
          onClick={this.props.close}>
          Close
        </button>
      </div>
    )
  }
}