import React from 'react';
import './Resume.css';
import Datas from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <>
      <section className="resume container section" id="resume">
        <h2 className="section__title">Experience</h2>
        <div className="resume__container grid">
          {/* Education Timeline */}
          <div className="timeline grid education">
            {Datas.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
              return null; // Avoid rendering undefined
            })}
          </div>

          {/* Experience Timeline */}
          <div className="timeline grid experience">
            {Datas.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
              return null; // Avoid rendering undefined
            })}
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Resume;
