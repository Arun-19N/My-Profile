import React from 'react';
import './Service.css';
import image1 from "../../assets/service1.jpg" ;
import image2 from "../../assets/service2.jpg" ;

const data = [{
  id:1,
  image:image1,
  title:"Front-End",
  description: "I specialize in building dynamic, responsive UIs with React, ensuring smooth API integrations and optimized performance for a seamless user experience.",
},{
  id:2,
  image:image1,
  title:"Back-End",
  description:"I build scalable backend solutions using Node.js, Express, and MongoDB, focusing on efficient API development and secure data management. I ensure seamless integration with frontend systems for smooth user experiences.",
},
{
  id:3,
  image:image1,
  title:"Web Developer",
  description: "As a passionate MERN Stack Developer, I thrive on crafting innovative, user-friendly, and highly functional web applications. From designing seamless frontend experiences with React to building robust, scalable backend solutions with Node.js and Express, I ensure every project is both efficient and engaging.  ",
}

]


const Service = () => {
  return <section className="services container section" id='services'>
    <div className="">
    <h2 className="section__title">Services</h2>
    <div className="services__container  grid">
      {data.map(({id,image,title,description}) => {
        return(
          <div className="services_card" key={id}>
            <img src={image} width={'250px'} height={'250px'} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
        );  
      })}
    </div>
    </div>
  </section>
}

export default Service
