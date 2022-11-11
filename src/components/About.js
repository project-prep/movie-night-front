import React from 'react';
import '../App.css';
import { Component } from "react";
import nerissa from '../images/Nerissa.jpg';
import mandela from '../images/mandela.jpg';
import marc from '../images/marc.jpg';
import jordan from '../images/jordan.jpg';
import Header from './Header';
import Footer from './Footer'


class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>

        <Header />

        <section className='about-sect top'>
          <div className='about-div'>
            <h1 className='about-page-h1'>About Us</h1>
          </div>
        </section>

        <section className='flip-sect'>
          <div className='item-divs'>
            <div className="about-div1">
              <div className="about-div2">
                <div className="about-div3">
                </div>
                <div className="about-div4">
                  <img src={jordan} alt="Jordan Kwan bio" className='img-about' />
                  <h1>Jordan Kwan</h1>
                  <p>Software Developer</p>
                  <p>Data Analytics, Retail</p>
                  <p>New Opportunity to do what I love</p>
                  <p>Software dev has the potential to help others</p>
                  <p>Love cars and bike rides</p>

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
                </div>
                <div className="about-div4">
                  <img src={marc} alt="Marc Wagner bio" className='img-about' />
                  <h1>Marc Wagner</h1>
                  <p>Software Developer</p>
                  <p>Retired from US Army in 2020</p>
                  <p>Platoon SergeantProject Manager in Construction testing and inspection</p>

                  <p>I chose this field to: </p>
                  <p>Learn new things, Problem Solving, Professional growth,</p>
                  <p>Experienced with soft-skills leaders need to be effective, Managed and trained teams from 4 to 70 personnel, Want to work on a small team doing projects from start to finish. Big no-no: “That’s the way we’ve always done it”</p>

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
                </div>
                <div className="about-div4">
                  <img src={mandela} alt="Mandela Steele bio" className='img-about' />
                  <h1>Mandela Steele</h1>
                  <p>Software Developer</p>
                  <p>Previous Tech (business development) experience at DoorDash, Flexport</p>
                  <p>Excited to learn about Code and all that can be done with it</p>
                  <p>Enjoys travelling and being outside</p>
                  <p>Open to any and all opportunities that lie ahead!
                  </p>
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
                  {/* <img src={nerissa} alt="Nerissa Leynes bio" className='img-about' /> */}
                </div>
                <div className="about-div4">
                  <img src={nerissa} alt="Nerissa Leynes bio" className='img-about' />
                  <h1>Nerissa Leynes</h1>
                  <p>Software Developer</p>
                  <p>Hi, my name is Nerissa Leynes. I served eight years of Active Duty in the Navy and am currently in the reserves. I decided to pursue a career in the tech field because I found coding interesting, stressful, and challenging. Coding allows me to implement features and make the web page interactive. Also, I’d like to build an app and hope to work in a team with other software developers in the tech industry. Learn coding here with me in Norfolk, VA</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <Footer />
      </>
    )
  }
};

export default About;
