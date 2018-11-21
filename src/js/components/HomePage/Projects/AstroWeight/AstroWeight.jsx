import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['The Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['The Sun', 27.9]
];

class AstroWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      planetValue: 0,
      planetName: '',
      planetList: [],
      checked: false,
      newWeight: '',
      output: '',
    }
    this.handleWeight = this.handleWeight.bind(this);
    this.handlePlanets = this.handlePlanets.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.submit = this.submit.bind(this);
  }
  // componentDidMount() {
  //   planets.push('a');
  //   planets = planets.reverse()
  //   this.setState({
  //     planetList: planets,
  //   })
  // }
  handleWeight(e) {
    const newWeight = (e.target.validity.valid) ? e.target.value : this.state.weight
    this.setState({ weight: newWeight })
  }
  handlePlanets(e) {
    let value = e.target.value;
    value = value.split(',')
    this.setState({ planetValue: value[1], planetName: value[0], output: '' })
  }
  handleChecked(e) {
    this.setState({ checked: e.target.checked })
  }
  submit(e) {
    e.preventDefault();
    let message;
    const { weight, planetValue, planetName } = this.state;
    let planetWeight = Number(weight) * Number(planetValue)
    planetWeight = planetWeight.toFixed(2);


    message = 'If you were on ' + planetName + '. You would weigh ' + planetWeight + ' lbs';
    if (planetName === 'Earth') { message = 'If you Chose "Earth", Then you should weigh ' + planetWeight + ' lbs'; }
    if (planetName === 'Pluto') { message = 'If you were on the tiny Planet Pluto, then you would weigh ' + planetWeight + ' lbs'; }

    this.setState({ newWeight: planetWeight, output: message })
  }
  gitHub() {
    ReactGA.event({
      category: 'Visited GitHub from Modal',
      action: 'From Astro Modal'
    })
  }

  render() {
    let { planetList, checked, output } = this.state;
    const { screen } = this.props;
    let list, labelStyle;
    if (checked) { list = planetList.slice(); list.splice(11, 1) }
    if (checked === false) { list = planetList };
    if (screen < 992) { labelStyle = 'astroLabels float-right' } else { labelStyle = 'astroLabels' }
    return (

      <div id='astroWeightProject' className='allProjectModals'>
        <div className='container astroWeightContainer allProjectModalsContainers'>
        
          <div className="row project-headers">
            <div className="col-xl-12">
              <div className='col-xl-12' id='astroHeader'>
                <h1>Astro Weight Calculator</h1>
              </div>
            </div>
          </div>

          <div className='row project-modal-body'>
            <div className="col-xl-12">
              <form onSubmit={this.submit} id='astroForm'>
                <div className='form-row align-items-center '>

                  <div className='form-group col-xl-3'>
                    <label htmlFor='inputWeight' className={labelStyle}> Enter Your Weight</label>
                    <input className='form-control' type='text' placeholder='Weight(lbs)' id='inputWeight' onChange={this.handleWeight} value={this.state.weight} pattern='^([1-9]+)([0-9]*)(\.[0-9]{0,2})?$' />
                  </div>

                  <div className='form-group col-xl-3'>
                    <label className={labelStyle}> Select A Planet </label>
                    <select className='form-control' onChange={this.handlePlanets}>
                      {list.map((planet, i) => {
                        if (planet === 'a') return <option key={i} hidden>Planets</option>
                        return (
                          <option key={i} value={planet}>
                            {planet[0]}
                          </option>
                        )
                      })}
                    </select>
                  </div>

                  <div className='form-group checkGroup col-xl-3'>
                    <div className='form-check checkForm'>
                      <input type='checkbox' className='checkBox' id='formCheck' onChange={this.handleChecked} />
                      <label className='astroLabels' htmlFor='formCheck'>
                        {(this.state.checked) ? 'How Dare you Remove Pluto!' : 'Check to remove Pluto'}
                      </label>
                    </div>
                  </div>

                  <div className='form-group col-xl-3'>
                    {
                      (this.state.weight.length > 0 && this.state.planetName !== '') ? <button className='btn btn-primary form-control' type='submit' id='astroCalculate'> Calculate </button> : <button className='btn btn-primary form-control' type='submit' id='astroCalculate' disabled> Calculate</button>
                    }
                  </div>
                </div>
              </form>

              <div className='row'>
                <div className='col-xl-12'>
                <div id='astroOutput'>{(this.state.newWeight) ? output : ''}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='row project-close-row'>
            <div className="col-sm-6 col-xl-6">
              <a href="https://github.com/wongalfonso/Astro-Weight-React" target="_blank" onClick = {this.gitHub}>
                <img className="gitMark" src="/images/GitHubWhite.png" />
              </a>
            </div>
            <div className="col-sm-6 col-xl-6 closeCol ">
              <button className='btn btn-danger form-control-xl closeBtn' onClick={this.props.close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.home.screen
  }
}

export default connect(mapStateToProps)(AstroWeight);
