import React from 'react';

const Collections = (props) => {
    console.log(props)

    return (
        <div>
            <h3>Your Collections</h3>
            {props.collections.map(collection => <li key={collection.id}>{collection.name} - {`${collection.pieces.length}`} pieces</li>)}
        </div>
    )
}

export default Collections 