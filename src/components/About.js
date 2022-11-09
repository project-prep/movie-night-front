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
            <h2>...</h2>
            <p>
            </p>
          </div>
        </section>
        <section className='about-sect'>
          <div className='about-div'>
            <h2>Nerissa Leynes</h2>
            <p>  Hello, hello, hello! I'm Monica Ramirez, I'm new to the tech field. Coding has been a rollercoaster of ups and downs, but I'm having the best time of my life. Slowly creeping up to wanting to work on backend. Coding challenges me and pushes me, I love it. If I'm not in front of the screen, you can find me at the gym lifting weights or doing mom things. Thanks for checking out our web app.
            </p>
          </div>
        </section>
      </>
    )
  }
};

export default About;
