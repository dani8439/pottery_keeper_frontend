import React from 'react';

// functional component. Not updating state... 

const Collection = (props) => {
    console.log(props)

    let collection = props.collections[props.match.params.id - 1]
    console.log(collection)

    return (
        <div>
            {collection ? <h2>{collection.name}</h2> : null}
            {collection ? <img src={collection.main_image}/> : null}
            {collection ? <p>{`${collection.pieces.length}`} pieces</p> : null}
            
        </div>
    )

}

export default Collection 