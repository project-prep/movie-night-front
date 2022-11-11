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
      <Header>
      </Header>
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
                <p>Hi I'm Jordan Kwan, former data analytic professional residing in the SF Bay Area. I love computers and always have since I was younger and was given the opportunity to dive head first into the field. I love the potential that there is with computers and how it can impact so many different people, giving them access to vasts amounts of knowledge or just communicating with others around the world. I hope that I can make a difference and be proud of what I leave behind. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='item-divs'>
          <div className="about-div1">
            <div className="about-div2">
              <div className="about-div3">
              </div>
              <img src={marc} alt="Marc Wagner bio" className='img-about' />
              <div className="about-div4">
                <h1>Marc Wagner</h1>
                <p>Software developers</p>
                <p>I retired 2 years ago from the US Army and since then have been a project manager for a construction testing and inspection company.  As a project manager I was able to cover a good portion of our vehicle maintenance costs by identifying an undercharged service and increasing the fee appropriately.  I specifically chose to become a software developer because it allows me to learn new things, I like problem solving, and I want the opportunity to grow professionally.   I have a lot of soft-skills leaders need to be effective; gained from years of managing and training increasingly larger groups.  I’m hoping to find a role in an environment where I can work with a small team and see projects from start to finish.  I want to do that in a company that doesn’t use the phrase ‘that’s the way we’ve always done it’.</p>
              </div>
            </div>
          </div>
      
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
          <div className='item-divs'>
            <div className="about-div1">
              <div className="about-div2">
                <div className="about-div3">
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
          </div>
        </section>
       <Footer />
      </>
    )
  }
};

export default About;
