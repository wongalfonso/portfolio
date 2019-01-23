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
import AddDrinks from './components/HomePage/Projects/PosCalc/AddDrinks';
import Weather from './components/HomePage/Projects/Weather/WeatherApp';
import VSTDA from './components/HomePage/Projects/VstdaApp/Vstda';
import AstroWeight from './components/HomePage/Projects/AstroWeight/AstroWeight';


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
          <Route path ='/pos/adddrinks' component = {AddDrinks } />
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
