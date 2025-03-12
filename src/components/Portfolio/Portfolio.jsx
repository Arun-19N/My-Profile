import React, { useState } from 'react';
import "./Portfolio.css"
import Menu from './Menu';

const Portfolio = () => {
  const [items,SetItems] = useState(Menu);

  const filterItem = (categoryItem) => {  // intha category items shu
    const updateItems = Menu.filter((getdedvalue) => { return getdedvalue.category === categoryItem;}) // itu onnu so check panni rendu ore madri irunt ata matum update la filter panni store pannuthu
    SetItems(updateItems);
  }


  
  return (
    <>
     <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={()=>SetItems(Menu)} >Everything </span>
        <span className="work__item" onClick={()=>filterItem("website")}>Websites</span>
        <span className="work__item"  onClick={()=>filterItem("React")}>React</span>
        <span className="work__item"  onClick={()=>filterItem("Design")}>Design </span>
        <span className="work__item"  onClick={()=>filterItem("Branding")}>Branding </span>
      </div>

      <div className="work__container grid">
        {items.map((elem)=> {
          const{id,image,title,category,link} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thubnail">
                <img  src={image} alt="" width="900px"   className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        }) }

      </div>
     </section>
    </>
  )
}

export default Portfolio
