import React from 'react';
import './Pricing.css';
import Image from "../../assets/service2.jpg"

const Pricing = () => {
  return (
    <>
      <section className="pricing container section" id='Pricing'>
        <h2 className="section__title">Pricing Plans</h2>
        <div className="pricing__container grid">
          <div className="pricing__item">
            <img src={Image} width={"160px"} alt="" className="pricing__img" />
            <h3 className="pricing__plan">Basic Plan</h3>
            <p className="pricing__title">A Simple option but powerful to </p>
            <p className="pricing__support">Email Support</p>
            <h3 className="price">
              <em>$</em> 9 <span>Month</span>
            </h3>
            <a href="" className="btn">Get Started</a>
          </div>

          <div className="pricing__item best">
            <span className="badge">Recommended</span>
            <img src={Image} width={"160px"} alt="" className="pricing__img" />
            <h3 className="pricing__plan">Premium</h3>
            <p className="pricing__title">Unlimited product including app </p>
            <p className="pricing__support">Mon-fri Support</p>
            <h3 className="price">
              <em>$</em> 9 <span>Month</span>
            </h3>
            <a href="" className="btn">Get Started</a>
          </div>

          <div className="pricing__item ">
            <img src={Image} width={"160px"} alt="" className="pricing__img" />
            <h3 className="pricing__plan">Ultimate</h3>
            <p className="pricing__title">A wise option for large compaines </p>
            <p className="pricing__support">All support</p>
            <h3 className="price">
              <em>$</em> 9 <span>Month</span>
            </h3>
            <a href="" className="btn">Get Started</a>
          </div>

          
          
        </div>
      </section>
    </>
  )
}

export default Pricing
