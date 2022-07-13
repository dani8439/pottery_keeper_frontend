export const editPiece = (piece) => {
    // debugger;

    return(dispatch) => {
        fetch(`https://potterykeeper-api.herokuapp.com/api/v1/pieces/${piece.id}`, {
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