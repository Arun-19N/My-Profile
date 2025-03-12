import React from 'react';
import './Home.css';
import me from './jerry.jpeg'
import HeaderSocial from './HeaderSocial';
import Scrolldown from './Scrolldown';
import Squares from '../background/Squares';

const Home = () => {
  return (
    <>
     {/* <Squares
speed={0.5} 
squareSize={56}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/> */}
      <section className="home container" id="home">
     

        <div className="intro">
          <img src={me} alt="" className="home__img" width='100px' />
          <h1 className="home__name"> Arun.N </h1>
            <span className="home__education">
              I am Web Developer
            </span>
            <HeaderSocial/>
            
          <div> <a href="#Contact"  className="btn">Hire ME</a> </div> 

            <Scrolldown/>
     
        </div>
      </section>
    </>
  )
}

export default Home
