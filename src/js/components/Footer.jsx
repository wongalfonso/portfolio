import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react"

const Footer = () => {
  return (
    <div className="footerContainer">

      <div className="row footerRow">

        <div className="col-md-3 footerEdge footerDiv">
          <div className="footerId">
            <a href="/">
              <p className="text-center text-muted" id="portfolioId">Alfonso Wongs Portfolio</p>
            </a>
          </div>
        </div>

        <div className="col-md-3 left-mid-footer footerDiv">
          <div>
            <a><p></p></a>
            <a href="http://origincodeacademy.com/" target="_blank">
              <p className="text-center text-muted foot">
                <u>Origin Code Academy</u>
              </p>
            </a>
            <a href="/files/AlfonsoWongResume.pdf" download>
              <p className="text-center text-muted foot">
                <u>Download Resume</u>
              </p>
            </a>
            <a href = 'mailto:alfonsowongsd@gmail.com' target = '_blank'>
              <p className = 'text-center text-muted foot'>
                <u>Email</u>
              </p>
            </a>
            <a href="https://github.com/wongalfonso" target = '_blank'>
              <p className="text-center text-muted foot">
                <u>Git Hub</u>
              </p>
            </a>
          </div>
        </div>

        <div className="col-md-3 footerDiv">
          <div className="footerId">
            <p className="text-center text-muted" id="socialId">Social Media</p>
          </div>
        </div>

        <div className="col-md-3 footerDiv">
          <div>
            <a href="https://www.linkedin.com/in/alfonso-wong/" target="_blank">
              <p className="text-center text-muted foot">
                <u>Linkedin</u>
              </p>
            </a>
            <a href="https://twitter.com/wongalfonz" target="_blank">
              <p className="text-center text-muted foot">
                <u>Twitter</u>
              </p>
            </a>
            <a href="https://www.youtube.com/channel/UCvS2AW-WTQOwsndcS4HPQcQ" target="_blank">
              <p className="text-center text-muted foot">
                <u>YouTube</u>
              </p>
            </a>
            <a href="https://www.flickr.com/photos/144073524@N03/" target="_blank">
              <p className="text-center text-muted foot">
                <u>Flickr</u>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;