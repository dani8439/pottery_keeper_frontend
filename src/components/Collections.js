import React from 'react';
import Collection from './Collection';

// functional component. Just iterating and displaying collection info.

const Collections = (props) => {
    console.log(props)

    return (
        <div>
            <h3>Your Collections</h3>
            {props.collections.map(collection => <div key={collection.id}><Collection collection={collection}/></div>)}


            {/* <h2>{collection.name}</h2>  <img src={collection.main_image}/> <p>{`${collection.pieces.length}`} pieces</p> */}
        </div>
    )
}

export default Collections 