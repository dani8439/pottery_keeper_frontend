export const editPiece = (collectionId, pieceId) => {
    return (dispatch) => {
       fetch(`http://localhost:3000/api/v1/collections/${collectionId}/pieces/${pieceId}`, {
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           method: 'PATCH',
           body: JSON.stringify(data)
       }) 
       .then(resp => resp.json())
       .then(data => dispatch({
           type: 'EDIT_PIECE',
           payload: data 

       }))
    }
}