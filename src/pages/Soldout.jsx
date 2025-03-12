import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function Soldout(){
    const location = useLocation();
    let type;
    let prevUrl;
    
    function capitalizeType(value){
        let cappedWord = value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();
        return cappedWord;
    }
    
    location.state.goto === null ? prevUrl = `/vans` : prevUrl = `/vans?${location.state.goto}`;
    location.state.type === null ? type = 'All Vans' : type = `${capitalizeType(location.state.type)} Vans`;
    
    
    return <>
            <div className='soldout-container'>
            <h1 className='soldout-header'>The van you have selected is sold out in your area</h1>
            <h2 className='soldout-subheader'>Please come back later or search another van</h2>
            <Link to={prevUrl} className='soldout-link'><button className='soldout-button'>Go Back To {type}</button></Link>
            </div>
        </>
}