import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
  return <div className='home-body'>
  <div className='home-header'>You Got The Travel Plans -- We Got The Vans</div>
  <div className='home-subHeader'>Add aventure to your life by joining the #vanlife movement. Rent your perfect van to have the perfect road trip!</div>
  <Link className='home-button-link' to='/vans'><button className='home-button'>Find Your Van</button></Link>
  </div>
};
