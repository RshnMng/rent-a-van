import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export default function Header(props){
  const auth = props.props.props.auth;
  const isAuth = props.props.props.isAuth;
  const saveToLocal = props.props.props.saveToLocal;
  const setCurrentUser = props.props.props.setCurrentUser;

  


  
    const activeStyle = {
          textDecoration : 'underline',
          fontWeight : 'bold',
          color: 'black'
    }
    
    function logout(){
      isAuth(false);
      saveToLocal('loggedin', false);
      saveToLocal('currentUser', '');
      setCurrentUser('');
    }

    return <>
      <nav className='main-nav'>
        <Link to='/' className='home-link'><h1 className='header'>#VanLife</h1> </Link>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} className='nav-links' to='/host' >Host</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} className='nav-links' to='/' >Home</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} className='nav-links' to='/about' >About</NavLink>
        <NavLink style={({isActive}) => isActive ? activeStyle : null} className='nav-links' to='/vans'>Vans </NavLink>
        {auth ? <NavLink style={({isActive}) => isActive ? activeStyle : null} className='nav-links' to='/' onClick={logout}>Log out</NavLink> : <NavLink style={({isActive}) => isActive ? activeStyle : null} className='nav-links' to='/login' >Log in</NavLink>}
      </nav>
    </>
}