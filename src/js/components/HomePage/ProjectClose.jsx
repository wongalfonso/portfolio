import React, { Component } from 'react'

export default class ProjectClose extends Component {
  render() {
    return (
      <div className='project-close'>
              <div className="project-close-git">
                <a href="https://github.com/wongalfonso/React-Change-Calculator" target="_blank" onClick={() => this.props.github}>
                  <img className="gitMark" src="/images/GitHub.png" />
                </a>
              </div>
              <div className="project-close-btn">
                <button className='close-btn' 
                        onClick={this.props.close}>
                        Close
                </button>
              </div>
            </div>
    )
  }
}