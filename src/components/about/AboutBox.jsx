import React from 'react'

const AboutBox = () => {
  return (
    <>
      <h3 className=" text-center " style={{marginTop:'50px',fontSize:'40px'}}>Skills</h3>
      <div className="about__boxes grid bg-dark">
        
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">React</h3>
            <spab className="about__subtitle">70%</spab>
        </div>
        </div>
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">Node Js</h3>
            <spab className="about__subtitle">50%</spab>
        </div>
        </div>
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">Express</h3>
            <spab className="about__subtitle">50%</spab>
        </div>
        </div>
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">Mongo DB</h3>
            <spab className="about__subtitle">70%</spab>
        </div>
        </div>
      </div>
    
    </>
  )
}

export default AboutBox
