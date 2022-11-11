import React from 'react';
import '../App.css';
import { Component } from "react";
import Header from './Header.js';
import Footer from './Footer.js';

class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
      <Header>
      </Header>
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
                <p>Software Developer</p>
                <p>Hi I'm Jordan Kwan, former data analytic professional residing in the SF Bay Area. I love computers and always have since I was younger and was given the opportunity to dive head first into the field. I love the potential that there is with computers and how it can impact so many different people, giving them access to vasts amounts of knowledge or just communicating with others around the world. I hope that I can make a difference and be proud of what I leave behind. </p>
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
                <p>Software developers</p>
                <p>I retired 2 years ago from the US Army and since then have been a project manager for a construction testing and inspection company.  As a project manager I was able to cover a good portion of our vehicle maintenance costs by identifying an undercharged service and increasing the fee appropriately.  I specifically chose to become a software developer because it allows me to learn new things, I like problem solving, and I want the opportunity to grow professionally.   I have a lot of soft-skills leaders need to be effective; gained from years of managing and training increasingly larger groups.  I’m hoping to find a role in an environment where I can work with a small team and see projects from start to finish.  I want to do that in a company that doesn’t use the phrase ‘that’s the way we’ve always done it’.</p>
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
      <Footer>
      </Footer>

      </>
    )
  }
};

export default About;
