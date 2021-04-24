import React from 'react';

const Collections = (props) => {
    console.log(props)

    return (
        <div>
            <h3>Your Collections</h3>
            {props.collections.map(collection => <div key={collection.id}><h2>{collection.name}</h2>  <img src={collection.main_image}/> <p>{`${collection.pieces.length}`} pieces</p></div>)}
        </div>
    )
}

export default Collections 