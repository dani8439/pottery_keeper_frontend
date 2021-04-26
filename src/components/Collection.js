import React from 'react';

// functional component. Not updating state... 

const Collection = (props) => {
    console.log(props)

    return (
        <div>
            <h2>{props.collection.name}</h2>  
            <img src={props.collection.main_image}/> 
            <p>{`${props.collection.pieces.length}`} pieces</p>
            
        </div>
    )

}

export default Collection 