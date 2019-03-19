import React, { Component } from 'react';
import '../scss/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePageApp';
import PageBlog from './components/Blog/PageBlog';
import SignUp from './components/Blog/SignUp/SignUp';
import Login from './components/Blog/Login';
import EnsureLoggedIn from './components/Blog/EnsureLoggedIn';
import Profile from './components/Blog/Profile';
import ListEdit from './components/Blog/ListEdit';
import BlogSplashPage from './components/Blog/BlogSplashPage';
import PosCalc from './components/HomePage/Projects/PosCalc/PosCalc';
import Weather from './components/HomePage/Projects/Weather/WeatherApp';
import VSTDA from './components/HomePage/Projects/VstdaApp/Vstda';
import AstroWeight from './components/HomePage/Projects/AstroWeight/AstroWeight';
import BPM from './components/HomePage/Projects/BPM/BPM';
import Pokedex from './components/HomePage/Projects/Pokedex/Pokedex';
import PokedexProfile from './components/HomePage/Projects/Pokedex/PokedexProfile';
import PokedexAnimation from './components/HomePage/Projects/Pokedex/PokedexAnimation';

export default class App extends Component {

  render() {    
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ HomePage } />          
          <Route path='/vstda' component={ VSTDA } />    
          <Route path='/weather' component={ Weather } />    
          <Route path='/astro' component={ AstroWeight } />
          <Route path='/pos' component={ PosCalc } />
          <Route path='/bpm' component={ BPM } />
          <Route exact path = '/pokedex' component = { Pokedex}/>
          <Route exact path = '/pokedex/:name' component = {PokedexProfile}/>
          <Route path ='/profile' component = { Profile } />
          <Route path ='/blogpost' component={ PageBlog } />
          <Route path ='/blogsplash' component = { BlogSplashPage } />   
          <Route path='/codewars/:id' component = {ListEdit}/>
          <Route path ='/project' component = { Weather} />
          <Route path='/signup' component={ SignUp } />      
          <EnsureLoggedIn/>          
          <Route path='/login' component={Login} />              
        </Switch>
      </Router >
    )
  }
}
