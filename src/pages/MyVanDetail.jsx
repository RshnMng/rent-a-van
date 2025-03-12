import React from 'react';
import {useParams, useOutletContext} from 'react-router-dom';

export default function MyVanDetails(){
    let myVans = useOutletContext();
    let params = useParams();
    let info = myVans[params.id - 1].description;
    
    
    
    return <> 
                <div className='my-van-details-div'>
                <div className='my-van-details-description'>
                <div className='my-van-details-content'><span className='details-label'>Description:</span>
                {info}</div>
                </div>
                <div className='my-van-details-visability'>
                <span className='details-label'>Visibility:</span>
                <div className='my-van-details-content'>Public</div>
                </div>
                <div className='my-van-details-rented'>
                <span className='details-label'>Rented:</span>
                <div className='my-van-details-content' style={{color: 'green'}}>Available</div>
                </div>
                </div>


        </>
}