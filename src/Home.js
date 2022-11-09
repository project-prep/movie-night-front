import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {
  render() {
    return (
      <>
        <div className='home-div'>
        <h1 className='login-header'>Movie Night</h1>
        {this.props.auth0.isAuthenticated ?
          <>
            <Profile />
            <Logout />
          </>
          :
          <Login />
        }
        </div>
        
  
      </>
    )
  }
}

export default withAuth0(Home);
