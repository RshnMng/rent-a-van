import React from 'react';
import {Link} from 'react-router-dom';


export default function NotFound(){
    return <>
        <div className='not-found-body'>
            <div className='not-found-header-div'>
                <h1 className='not-found-header'>Sorry, the page you were looking for was not found.</h1>
            </div>
            <div className='not-found-button-div'>
              <Link to='/'>  <button className='not-found-button'>Return To Home</button> </Link>
            </div>
        </div>
    </>
}