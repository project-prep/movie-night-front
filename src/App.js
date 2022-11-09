// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>

            <Route
              exact path="/"
              element={<Home />}
            >
            </Route>

            
            <Route
              exact path="/main"
              element={<Main />}
            >
            
            {/* <Main /> */}

            </Route>
            <Route path="/about"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}



export default App;
