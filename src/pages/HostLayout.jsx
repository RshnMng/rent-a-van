import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';


export default function HostLayout(props){
   const activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold', 
    color: 'black'
};

const myVans = props.props;




    return <> 
        <nav className='host-nav'>
            <NavLink  to='/host' style={(obj) => obj.isActive ? activeStyle : null} end>Dashboard</NavLink>
            <NavLink  to='/host/my-vans' style={(obj) => obj.isActive ? activeStyle: null}>Vans</NavLink>
            <NavLink  to='/host/income' style={(obj) => obj.isActive ? activeStyle : null} >Income
            </NavLink>
            <NavLink  to='/host/reviews' style={(obj) => obj.isActive ? activeStyle: null}>Review</NavLink>
           
            
        </nav>
            <Outlet context={myVans}/>
            </>
}