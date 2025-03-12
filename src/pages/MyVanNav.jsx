import React from 'react';
import {NavLink, useParams} from 'react-router-dom';

export default function MyVanNav(){
    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold',
        color: 'black'
    }
    
    const params = useParams();
    const vanIndex = params.id;
    
    return <>
    <nav className='detail-nav-div'>
        <NavLink className='my-van-nav-links' to={`/host/my-vans/${vanIndex}`} style={({isActive}) => isActive ? activeStyle : null} end >Details</NavLink>
        <NavLink className='my-van-nav-links' to={`/host/my-vans/${vanIndex}/pricing`} style={({isActive}) => isActive ? activeStyle : null}>Pricing</NavLink>
        <NavLink className='my-van-nav-links' to={`/host/my-vans/${vanIndex}/photos`} style={({isActive}) => isActive ? activeStyle : null}>Photos</NavLink>
    </nav>
       
    </>
}