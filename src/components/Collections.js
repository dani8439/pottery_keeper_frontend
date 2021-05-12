import React from 'react';
import {Link} from 'react-router-dom';
// import Collection from './Collection';

// functional component. Just iterating and displaying collection info.

const Collections = (props) => {
    console.log(props)

    return (
        <div>
            <h3>Your Collections</h3>
            {props.collections.map(collection => 
                <div key={collection.id}>
                    <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
                </div>)}


        </div>
    )
}

export default Collections 