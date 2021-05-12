import React from 'react';
// import {Redirect} from 'react-router';
import PiecesContainer from '../containers/PiecesContainer';
import CollectionEdit from './CollectionEdit'

// functional component. Not updating state... 

const Collection = (props) => {
    

    // router props and regular props to get to the id
    let collection = props.collections.filter(collection => collection.id == props.match.params.id)[0]
    // console.log(collection)

    return (
        <div>
            {/* {collection ? null : <Redirect to='/collections/' />} */}
            {collection ? <h2>{collection.name}</h2> : null}
            {collection ? <img src={collection.main_image} alt="pottery"/> : null}

            <h4>Edit Collection</h4>
            <CollectionEdit collection={collection}/>
            <PiecesContainer collection={collection}/>
            
            
        </div>
    )

}

export default Collection 