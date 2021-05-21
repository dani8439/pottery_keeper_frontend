export const deletePiece = (pieceId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/pieces/${pieceId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        // send back the collection to simplify what we do in our reducer, rather than having to search for collection, and then delete piece from there.
        .then(collection => dispatch({type: 'DELETE_PIECE', payload: collection}))
    }
}