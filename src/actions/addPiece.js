export const addPiece = (piece, collectionId) => {
<<<<<<< HEAD
    // debugger; 
=======
    // debugger;
>>>>>>> ef3e2c0a44554db094db2170322ed6c69ee360dc
    piece["collection_id"] = collectionId

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pieces`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(piece)
            // body: JSON.stringify(piece, collectionId)
            
        })
        .then(resp => resp.json())
        .then(collection => dispatch({type: 'ADD_PIECE', payload: collection}))
    }

}