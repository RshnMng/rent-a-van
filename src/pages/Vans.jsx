import React from "react";
import VanNav from './VanNav';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import VanDisplay from './VanDisplay';



export default function Vans(props) {
 let vanInfo = props.props[0];
 let displayedVans = props.props[2];
 let setDisplayedVans = props.props[3];
 let loading = props.props[4];
 let error = props.props[5];
 let errorInfo = props.props[6];
 let location = useLocation();
 
    
   
    let [searchParams, setSearchParams] = useSearchParams();
    let url = searchParams.toString();
    let type = searchParams.get('type');
    
   
  
    
    
    

    
    let backgroundColor;
    
    if(loading) {
        return  <div className='loading-div'>
                         <h1 className='loading'>Loading...</h1> 
                </div>
    }
    
    if(error) {
         return  <div className='error-div'>
                         <h1 className='error'>There was an Error : <br/>
                         {errorInfo.message}</h1> 
                </div>
    }
   
   return <>
   
 <VanNav props={{vanInfo, displayedVans, setDisplayedVans}}/>
    <div className='van-grid'>
        { displayedVans.map((van) => {
             {van.type === 'simple' ? backgroundColor = 'orange' : van.type === 'rugged' ? backgroundColor = 'green' : van.type === 'luxury' ? backgroundColor = 'purple' : backgroundColor = 'none'}
            return  <Link className='van-links' key={van.id} to={`/vans/${van.id}`} state={{prevParams: url, type: type}}>
                    <VanDisplay  van={van} backgroundColor={backgroundColor} goto={location.search}/>
                    </Link>
        })}

</div>
    </>
}