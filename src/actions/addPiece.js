export const addPiece = (piece, collectionId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/collections/${collectionId}/pieces`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(piece)
        })
        .then(resp => resp.json())
        .then(piece => dispatch({type: 'ADD_PIECE', payload: piece}))
    }

}