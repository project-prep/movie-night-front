import React from 'react'
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
          <div className='about-div'>
            <h2>Jordan Kwan</h2>
            <p>
            </p>
          </div>
        </section>

        <section className='about-sect'>
          <div className='about-div'>
            <h2>Marc Wagner</h2>
            <p>  
            </p>
          </div>
        </section>

        <section className='about-sect'>
          <div className='about-div'>
            <h2>Mandela Steele</h2>
            <p>  
            </p>
          </div>
        </section>

        <section className='about-sect'>
          <div className='about-div'>
            <h2>Nerissa Leynes</h2>
            <p>  Hi, my name is Nerissa Leynes. I served eight years of Active Duty in the Navy and am currently in the reserves. I decided to pursue a career in the tech field because I found coding interesting, stressful, and challenging. Coding allows me to implement features and make the web page interactive. Also, I’d like to build an app and hope to work in a team with other software developers in the tech industry. Learn coding here with me in Norfolk, VA
            </p>
          </div>
        </section>
      </>
    )
  }
};

export default About;
