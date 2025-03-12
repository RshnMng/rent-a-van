import React from 'react';
import {useParams, Outlet, Link, useOutletContext } from 'react-router-dom';
import MyVanNav from './MyVanNav';
import { FaArrowLeft } from "react-icons/fa";

export default function MyVan(){
    let myVans = useOutletContext();
    let params = useParams();
    let vanIndex = params.id - 1;
    let thisVan = myVans[vanIndex];
    let vanType = myVans[vanIndex].type
    let backgroundColor;
   
   {vanType === 'simple' ? backgroundColor = 'orange' : vanType === 'rugged' ? backgroundColor = 'green' : vanType === 'luxury' ? backgroundColor = 'purple' : backgroundColor = 'none'}
    
    return <>
    <div className='back-to-vans-div'>
    <div className='back-to-vans-arrow'>
    <FaArrowLeft />
    </div>
    <div className='back-to-vans-link-div'>
    <Link to='/host/my-vans' className='back-to-vans-link'>Back to all vans </Link>
    </div>
    </div>
    <div className='my-van-div'>
        <div className='my-van-header-div'>
             <div className='my-van-image-div'>
                <img className='my-van-image' src={thisVan.imageUrl} width={200} height={200}/>
                </div>
                
             <div className='my-van-info-div'>
                <div className={`my-van-type ${backgroundColor}`}>{thisVan.type}</div>
                <div className='my-van-name'>{thisVan.name}</div>
                <div className='my-van-price'>{`$${thisVan.price}/day`}</div>
              </div>
        </div>
         <MyVanNav />
         <Outlet context={myVans}/>
    </div>
   
  
    </>
}

// 1. set up host van page when one is selected and style
// 2. style your listed vans page
// 3. create and style dashboard, income and reviews page
// 4. move on to next part of the scrim 