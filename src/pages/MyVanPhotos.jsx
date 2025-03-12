import React from 'react';
import {useParams, useOutletContext} from 'react-router-dom';

export default function MyVanPhotos(props){
        const myVans = useOutletContext();
        const params = useParams();
        const vanIndex = params.id - 1;
        const thisVan = myVans[vanIndex];
    return <> 
                <div className='van-photo-div'>
                        <img className='van-photo' src={thisVan.imageUrl} height={100} width={100}/>
                </div>


        </>
}