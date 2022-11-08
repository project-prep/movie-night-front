// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route
              exact path="/"
              element={<Main />}
            >

            </Route>
            {/* <Route path="/about"
              element={<About />}
            >
            </Route> */}
          </Routes>
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}



export default App;
