import planets from './../../../../../../server/planets';

export function updateList() {  
  let planetList = planets.slice();
  planetList.push('a');
  planetList = planetList.reverse();
  return {
    type: 'UPDATE_PLANETS',
    payload: planetList
  }
}

export function addWeight(weight) {
  return {
    type: 'ADD_WEIGHT',
    payload: weight
  }
}

export function selectedPlanet(value, name) { 
  return {
    type: 'SELECT_PLANET',
    payload: { planetValue: value, planetName: name, output: '' }
  }
}
export function checked(bool) {  
  return {
    type: 'PLUTO_CHECKED',
    payload: bool
  }
}

export function calculateWeight(weight, planetName, planetValue) {
  let message;
  let planetWeight = Number(weight) * Number(planetValue);
  planetWeight = planetWeight.toFixed(2);
  message = 'If you were on ' + planetName + '. You would weigh ' + planetWeight + ' lbs';
  if (planetName === 'Earth') { message = 'If you Chose "Earth", Then you should weigh ' + planetWeight + ' lbs'; }
  if (planetName === 'Pluto') { message = 'If you were on the tiny Planet Pluto, then you would weigh ' + planetWeight + ' lbs'; }
  return {
    type: 'CALCULATE_WEIGHT',
    payload: { newWeight: planetWeight, output: message }
  }
}