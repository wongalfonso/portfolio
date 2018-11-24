import React from 'react'

const ProjectClose = ({github, closeModal}) => {

  let close = () => {    
    closeModal;
  }
  return (
    <div className='project-close'>
            <div className="project-close-git">
              <a href="https://github.com/wongalfonso/React-Change-Calculator" target="_blank" onClick={() => github}>
                <img className="gitMark" src="/images/GitHub.png" />
              </a>
            </div>
            <div className="project-close-btn">
              <button className='close-btn' 
                      onClick={close}>
                      Close
              </button>
            </div>
          </div>
  )
}

export default ProjectClose;