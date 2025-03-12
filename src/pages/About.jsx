import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-body">
      <div className="about-mainImg"></div>
      <div className="about-info">
        <div className="about-header">Dont Squeeze in a Sedan, When You Can Relax in a Van</div>
        <div className="about-paragraph">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified after every trip to ensure that your travel plans go off without a hitch!</div>
        <div className="about-paragraph">Our staff is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. </div>
        <div className="about-button-box">
          <div className="about-button-paragraph">Your destination is ready.</div>
          <div className="about-button-paragraph">Your van is waiting.</div>
          <Link to="/vans" className="about-button-link">
            <button className="about-button">Explore our vans</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
