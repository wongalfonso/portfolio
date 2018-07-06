import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getUserInfo } from './ProfileActions';
import List from '../List'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    }
    this.expandList = this.expandList.bind(this);
    this.closeList = this.closeList.bind(this);
  }

  componentDidMount() {
    const { userLogin, dispatch } = this.props;
    dispatch(getUserInfo(userLogin.id));
  }

  expandList(i) {
    const newList = this.state.challenges
    newList[i].expand = true

    this.setState({ challenges: newList })
  }

  closeList(i) {
  }

  render() {
    const { isLoggedIn, user } = this.props;    
    return (
      <div className='container'>
        {(isLoggedIn !== true) && <Redirect from='/profile' to='/login' />}
        <div className='row'>
          <h2>Welcome {}</h2>
        </div>
        <div className='row'>
          <div className='col-8'>
            <h3>Past Posts</h3>
          </div>
          <div className='col-4'>
            <h3> Tool Bar </h3>
            <Link to='/blogpost'><button className='btn'>Post A new Blog
            </button></Link>
          </div>
        </div>
        <div className='row'>
          {user.profile.blogs.length > 0 &&
            <List
              challenges={user.profile.blogs}
              expand={this.expandList}
              close={this.closeList}
            />
          }

        </div>
      </div>
    )
  }
}