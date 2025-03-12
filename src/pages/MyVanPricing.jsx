import React from 'react'
import {useParams, useOutletContext} from 'react-router-dom';

export default function MyVanPricing(props){
        const myVans = useOutletContext();
        const params = useParams();
        const vanIndex = params.id - 1;
        const thisVan = myVans[vanIndex];
        
    return <> 
                <div className='price-div'>
                    <div className='price-section'>
                        <div className='price-label'>Daily:</div>
                        <div className='price-cost'>${thisVan.price}</div>
                    </div>
                     <div className='price-section'>
                        <div className='price-label'>Weekly:</div>
                        <div className='price-cost'>${thisVan.price * 7 - 55}</div>
                    </div>
                     <div className='price-section'>
                        <div className='price-label'>Monthly:</div>
                        <div className='price-cost'>${thisVan.price * 30 - 185}</div>
                    </div>
        
                </div>


        </>
}