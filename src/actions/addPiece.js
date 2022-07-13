export const addPiece = (piece, collectionId) => {
    // debugger;
    piece["collection_id"] = collectionId

    return (dispatch) => {
        fetch(`https://potterykeeper-api.herokuapp.com/api/v1/pieces`, {
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