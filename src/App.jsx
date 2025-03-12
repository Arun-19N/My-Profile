import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/Service/Service';
import Resume from './components/resume/Resume';
import Portfolio from './components/Portfolio/Portfolio'; 
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Squares from './components/background/Squares';



function App() {

  return (
    <>
      <Sidebar/>
      
      <main className="main">
     
        <Home/>
        <About/>
        <Service/>
        <Resume/>
        <Portfolio/>
        {/* <Pricing/> */}
        {/* <Testimonial/>   */}
        {/* <Blog/> */}
        <Contact/>
        {/* <Squares
speed={0.5} 
squareSize={56}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
        
        <Squares
speed={0.5} 
squareSize={56}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
         */}
      </main>
    
    </>
  )
}

export default App
