import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

  largeScreen() {
    return (
      <div className="footerContainer" id='footer'>
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
                  <u>Origin Code Academy</u></p>
              </a>
              <a href="/files/AlfonsoWongResume.pdf" download>
                <p className="text-center text-muted foot">
                  <u>Download Resume</u></p>
              </a>
              <a href='mailto:alfonsowongsd@gmail.com' target='_blank'>
                <p className='text-center text-muted foot'><u>Email</u>
                </p>
              </a>

              <a href="https://github.com/wongalfonso" target='_blank'>
                <p className="text-center text-muted foot">
                  <u>GitHub</u></p>
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

  smallScreen() {
    return (
      <div className="footerContainer conatiner" id='footer'>
        <div className="row footerTopRow footRow">
          <div className="col-12">
            <a href="/files/AlfonsoWongResume.pdf" download>
              <p className="text-center text-muted foot">
                <u>Download Resume</u></p>
            </a>
          </div>
        </div>
        <div className="row footRow">
          <div className="col-12">
            <a href='mailto:alfonsowongsd@gmail.com' target='_blank'>
              <p className='text-center text-muted foot'><u>Email</u>
              </p>
            </a>
          </div>
        </div>
        <div className="row footRow">
          <div className="col-12">
            <a href="https://github.com/wongalfonso" target='_blank'>
              <p className="text-center text-muted foot">
                <u>GitHub</u></p>
            </a>
          </div>
        </div>
        <div className="row footRow">
          <div className="col-12">
            <a href="http://origincodeacademy.com/" target="_blank">
              <p className="text-center text-muted foot">
                <u>Origin Code Academy</u></p>
            </a>
          </div>
        </div>
        <div className="row footRow">
          <div className="col-12">
            <a href="https://www.linkedin.com/in/alfonso-wong/" target="_blank">
              <p className="text-center text-muted foot">
                <u>Linkedin</u>
              </p>
            </a>
          </div>
        </div>
      </div>
    )
  }


  render() {
    const { screen } = this.props;

    if (screen > 992) {
      return this.largeScreen();
    } else {
      return this.smallScreen();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.home.screen
  }
}

export default connect(mapStateToProps)(Footer);