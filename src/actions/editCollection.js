export const editCollection = (data) => {
    return (dispatch) => {
        // debugger;
       fetch(`https://potterykeeper-api.herokuapp.com/api/v1/collections/${data.id}`, {
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           method: 'PATCH',
           body: JSON.stringify(data)
       }) 
       .then(resp => resp.json())
       .then(data => dispatch({
           type: 'EDIT_COLLECTION',
           payload: data 

       }))
    }
}