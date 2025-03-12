import React, {useEffect} from 'react';
import { Link, useSearchParams } from 'react-router-dom';


export default function VanNav(props){
    let vanInfo = props.props.vanInfo;
    let setDisplayedVans = props.props.setDisplayedVans;
    let [searchParams, setSearchParams] = useSearchParams();
    let typeFilter = searchParams.get('type');
    
    let filteredVans = vanInfo.filter((van) => {
      
        return van.type === typeFilter;
    })
    
  
    
   useEffect(() => {
    typeFilter === null ? setDisplayedVans(vanInfo) :
    setDisplayedVans(filteredVans)
   }, [typeFilter])
    
    
    function genSearchParams(key, value) {
       const sp = new URLSearchParams(searchParams);
       
       value === null ? sp.delete('type') : sp.set(key, value);
       
       
       
      return sp.toString()
    }
    return <>
      <h1 className='van-filter-header'>Explore Our Vans</h1>
      <div className='van-filter-button-container'>
      <div className='van-filter-button-div'>
      <Link to={`?${genSearchParams('type', 'simple')}`} className='van-filter-button' id='simple' >Simple</Link>
      <Link to={`?${genSearchParams('type', 'luxury')}`}  className='van-filter-button' id='luxury' >Luxury</Link>
      <Link to={`?${genSearchParams('type', 'rugged')}`}  className='van-filter-button' id='rugged' >Rugged</Link>
      </div>
      <Link to='.' className='van-clear-button' >Clear Filters</Link>
      </div>
    </>
}
