import React from 'react';
import '../App.css';
import { Component } from "react";


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <section className='about-sect top'>
          <div className='about-div'>
            <h1 className='about-page-h1'>About Page</h1>
          </div>
        </section>

        <section className='flip-sect'>
          <div className='item-divs'>
          <div className="about-div1">
            <div className="about-div2">
              <div className="about-div3">
                <img src="" alt="Jordan Kwan bio" />
              </div>
              <div className="about-div4">
                <h1>Jordan Kwan</h1>
                <p>..title goes here.. (Software Developer..etc)</p>
                <p>bio/pitch goes here</p>
              </div>
            </div>
          </div>
          </div>
        {/* </section> */}

        {/* <section className='flip-sect'> */}
        <div className='item-divs'>
          <div className="about-div1">
            <div className="about-div2">
              <div className="about-div3">
                <img src="" alt="Marc Wagner bio" />
              </div>
              <div className="about-div4">
                <h1>Marc Wagner</h1>
                <p>..title goes here.. (Software Developer..etc)</p>
                <p>bio/pitch goes here</p>
              </div>
            </div>
          </div>
          </div>
        {/* </section> */}

        {/* <section className='flip-sect'> */}
        <div className='item-divs'>
          <div className="about-div1">
            <div className="about-div2">
              <div className="about-div3">
                <img src="" alt="Mandela Steele bio" />
              </div>
              <div className="about-div4">
                <h1>Mandela Steele</h1>
                <p>..title goes here.. (Software Developer..etc)</p>
                <p>bio/pitch goes here</p>
              </div>
            </div>
          </div>
          </div>
        {/* </section> */}

        {/* <section className='flip-sect'> */}
        <div className='item-divs'>
          <div className="about-div1">
            <div className="about-div2">
              <div className="about-div3">
                <img src="./images/issa4.jpg" alt="Nerissa Leynes bio" id='img-about'  />
              </div>
              <div className="about-div4">
                <h1>Nerissa Leynes</h1>
                <p>Software Developer</p>
                <p>Hi, my name is Nerissa Leynes. I served eight years of Active Duty in the Navy and am currently in the reserves. I decided to pursue a career in the tech field because I found coding interesting, stressful, and challenging. Coding allows me to implement features and make the web page interactive. Also, I’d like to build an app and hope to work in a team with other software developers in the tech industry. Learn coding here with me in Norfolk, VA</p>
              </div>
            </div>
          </div>
        </div>
        
        </section>
     

      </>
    )
  }
};

export default About;
