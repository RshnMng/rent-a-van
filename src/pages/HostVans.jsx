import React from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import ListedVan from './ListedVan';

export default function HostVans(){
    const myVans = useOutletContext();
   
   let listedVans = myVans.map((myVan) => {
    return <Link to={`/host/my-vans/${myVan.id}`} key={myVan.id} className='listed-link'><ListedVan van={myVan} /> </Link>
   })
   
    return <> 
        <div className='listed-title'>
        <h1 className='listed-header'>Your Listed Vans</h1>
        </div>
        {listedVans}
        
    </>
}