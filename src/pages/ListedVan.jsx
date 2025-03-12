import React from 'react';

export default function ListedVan(props){
    let van = props.van;
    
    return <>
            <div className='listed-van-div'>
             <div className='listed-van-image-div'>
                <img className='listed-van-image' src={van.imageUrl} alt={van.image} weight={150} height={150} />
             </div>
             <div className='listed-info-div'>
             <div className='listed-van-name'>{van.name}</div>
             <div className='listed-van-price'>{`$${van.price}/day`} </div>
             </div>
            </div>
        </>
}