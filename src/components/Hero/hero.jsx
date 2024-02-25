import React from "react";
import "./Hero.css"

const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">left-section</div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
