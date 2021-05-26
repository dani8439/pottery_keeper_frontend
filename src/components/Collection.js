import React from 'react';
import PiecesContainer from '../containers/PiecesContainer';
import CollectionEdit from './CollectionEdit'

// functional component. Not updating state... 

const Collection = (props) => {
    

    // router props and regular props to get to the id
    // possible this is throwing an error?
    let collection = props.collections.filter(collection => collection.id == props.match.params.id)[0]
    // console.log(collection)

    return (
        <div>
            {collection ? <h2>{collection.name}</h2> : null}
            {collection ? <img src={collection.main_image} alt="pottery"/> : "Loading..."}

            <CollectionEdit collection={collection}/>
            <PiecesContainer collection={collection}/>
            
            
        </div>
    )

}

export default Collection 