import React from 'react';
import PiecesContainer from '../containers/PiecesContainer';
import CollectionEdit from './CollectionEdit'

// functional component. Not updating state... 

const Collection = (props) => {

    const isEditing = props.isEditing;

    const handleEditClick = () => {
        props.isEditing({isEditing: true})
    }  
    

    // router props and regular props to get to the id
    let collection = props.collections.filter(collection => collection.id == props.match.params.id)[0]
    // console.log(collection)

    return (
        <React.Fragment>
            <div className="collection">
                {collection ? <h2>{collection.name}</h2> : null}
                {collection ? <img src={collection.main_image} alt="pottery"/> : "Loading..."}
                <br></br>
                {/* <button onClick={() => this.handleEditClick(collection)}>EDIT</button> */}
                <button onClick={() => console.log("Clicked!")}>EDIT</button>

            </div>
            <div>
                
                { isEditing && <CollectionEdit collection={collection}/>}
                <CollectionEdit collection={collection}/>
                <PiecesContainer collection={collection}/>
            </div>
                
            
            
            
        </React.Fragment>
    )

}

export default Collection 