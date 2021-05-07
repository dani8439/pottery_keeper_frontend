export const editPiece = (piece, collectionId, pieceId) => {
    // don't think this is correct.
    return (dispatch) => {
       fetch(`http://localhost:3000/api/v1/collections/${collectionId}/pieces/${pieceId}`, {
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           method: 'PATCH',
           body: JSON.stringify(piece)
       }) 
       .then(resp => resp.json())
       .then(piece => dispatch({
           type: 'EDIT_PIECE',
           payload: piece

       }))
    }
}