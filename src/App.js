// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';
// import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          
          <Routes>

            <Route exact path="/" element = {
            
              this.props.auth0.isAuthenticated ? 
                
                <>
                  <Header />
                  <Profile />
                  <Logout />
                  <Main />
                  {/* <About /> */}
                  <Footer />  
                </>  
                : 
                <>
                  <Login />
                </>   
            }
        
            />

            <Route path="/"
              element={<Header />}
            >
            </Route>

            <Route path="/about"
              element={<About />}
            >
            </Route>

            <Route path="/footer"
              element={<Footer />}
            >
            </Route>

          </Routes>
          
        </Router>
      </>
    );
  }
}



export default withAuth0(App);
