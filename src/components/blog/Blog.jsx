import React from 'react';
import './Blog.css';
import Image1 from '../../assets/service2.jpg'


const Blog = () => {
  return (
    <>
      <section className="blog container section" id='blog'>
        <h2 className="section__title">Latest Post</h2>
        <div className="blog__container grid">

          <div className="blog__card">
            <div className="blog__thumb">
              <a href="#"><span className="blog__categroy">Reiwes</span></a>
              <a href=""><img src={Image1} width={"350px"} alt="" className="blog__img" /></a>
            </div>
            <div className="blog__details">
              <h3 className="blog__title">5 Best App Development Tool for Your Projects</h3>
              <div className="blog__meta"> 
                <span>19 May, 2024</span>
                <span className="blog__dot">.</span>
                <span>Bolby</span>
              </div>
            </div>
          </div>

          <div className="blog__card">
            <div className="blog__thumb">
              <a href="#"><span className="blog__categroy">Reiwes</span></a>
              <a href=""><img  src={Image1} width={"350px"} alt="" className="blog__img" /></a>
            </div>
            <div className="blog__details">
              <h3 className="blog__title">5 Best App Development Tool for Your Projects</h3>
              <div className="blog__meta"> 
                <span>19 May, 2024</span>
                <span className="blog__dot">.</span>
                <span>Bolby</span>
              </div>
            </div>
          </div>

          <div className="blog__card">
            <div className="blog__thumb">
              <a href="#"><span className="blog__categroy">Reiwes</span></a>
              <a href=""><img src={Image1} width={"350px"} alt="" className="blog__img" /></a>
            </div>
            <div className="blog__details">
              <h3 className="blog__title">5 Best App Development Tool for Your Projects</h3>
              <div className="blog__meta"> 
                <span>19 May, 2024</span>
                <span className="blog__dot">.</span>
                <span>Bolby</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
