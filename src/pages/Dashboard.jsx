import React from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import HostVans from './HostVans';

export default function Dashboard(props){
    const currentUser = props.props;
    
    const myVans = useOutletContext();
   
  
    return <>
             <div className='dash-div'>
                <div className='dash-welcome-div'>
                  <div className='dash-welcome-info'>
                    <div className='dash-welcome-label'>Welcome {currentUser}!</div>
                    <div className='dash-income-label'>Income in the last <span className='thirty-days'>30 days</span></div>
                    <div className='dash-income'>$2,260</div>
                 </div>
                 <div className='dash-income-link-div'>
                     <Link className='dash-income-link' to='/host/income'>Details</Link>
                    </div>
               </div>
                <div className='dash-review-div'>
                    <div className='dash-review-info-div'>
                    <div className='dash-review-score'>Review score <img className='rev-star' src='/star.png'/> 5.0 / 5 </div>
                    </div>
                    
                    <div className='dash-review-link-div'>
                     <Link className='dash-review-link' to='/host/reviews'>Details</Link>
                    </div>
                </div>
             </div>
                <div className='dash-vans'>
                <HostVans props={myVans}/>
                </div>
               
            </>
}