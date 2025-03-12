import React from 'react';


export default function VanDisplay({van, backgroundColor}){
  
    return <>
      <div key={van.id} className='van-display-div'>
                        <img className='van-display-img' src={van.imageUrl} alt={`${van.name}`}  height={200} width={200}/>
                        <div className='van-display-name'>{van.name}</div>
                        <div className='van-display-price'>${van.price} /day</div>
                        <div className={`van-display-type ${backgroundColor}`}>{van.type}</div>
                    </div>
    
    
            </>
}