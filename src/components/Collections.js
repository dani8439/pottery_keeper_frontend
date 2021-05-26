import React from 'react';
import { Route, Link } from 'react-router-dom';

// functional component. Just iterating and displaying collection info.

const Collections = (props) => {
    // console.log(props)

    return (
        <div>
            <h3>Your Collections</h3>
            {props.collections.map(collection =>
                <div key={collection.id} className="collection-card">
                    <Link to={`/collections/${collection.id}`}>{collection.name}<br></br><img src={collection.main_image} alt=""/></Link><br></br><br></br>
                    
                </div>)}


        </div>
    )
}

export default Collections
