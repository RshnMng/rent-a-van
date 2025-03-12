import React from 'react';
import {Link, useParams, useLocation } from 'react-router-dom';

export default function VanDetail(props) {
    let vanInfo = props.props;
    
    let backgroundColor;
    let params = useParams();
    let vanId = params.id - 1;
    let location = useLocation();
    let prevUrl = `?${location.state.prevParams}`;
    let type = location.state.type;
    let capType;
    
   
    
    type === null ? capType = '' : capType = type.substring(0,1).toUpperCase() + type.substring(1).toLowerCase();
   
 
    
    {vanInfo[vanId].type === 'simple' ? backgroundColor = 'orange' : vanInfo[vanId].type === 'rugged' ? backgroundColor = 'green' : vanInfo[vanId].type === 'luxury' ? backgroundColor = 'purple' : backgroundColor = 'none'}
    
    return <>
      <Link className='back-to-vans-link' to={`../vans${prevUrl}`}>{`Go Back To ${capType} Vans`}</Link>
            <div className='van-detail-photo-div'>
                <img src={vanInfo[vanId].imageUrl} alt={vanInfo[vanId].name} height={400} width={400}/>
            </div>
            <div className={`van-detail-type ${backgroundColor} `}>{vanInfo[vanId].type}</div>
            <div className='van-detail-name'>{vanInfo[vanId].name}</div>
            <div className='van-detail-price'>${vanInfo[vanId].price} /Day</div>
            <div className='van-detail-paragraph'>{vanInfo[vanId].description}</div>
            <Link to='/soldout' state={{goto : location.state.prevParams, type: type}}className='van-detail-button-link'><button className='van-detail-rent-button'>Rent This Van</button></Link>
          
    </>
}
