import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Movie Night</h1>
        {this.props.auth0.isAuthenticated ?
          <>
            <Profile />
            <Logout />
          </>
          :
          <Login />
        }
        
  
      </>
    )
  }
}

export default withAuth0(Home);
