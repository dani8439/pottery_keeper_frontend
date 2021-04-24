export const addCollection = (data) => {
    return (dispatch) => {
       fetch('http://localhost:3000/api/v1/collections', {
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           method: 'POST',
           body: JSON.stringify(data)
       }) 
       .then(resp => resp.json())
       .then(data => dispatch({
           type: 'ADD_COLLECTION',
           payload: data 

       }))
    }
}