// import Collections from "../components/Collections"

export function fetchCollections(action) {
    // thunk allowing us to return a function inside another function, passing in dispatch function as an argument, so we can use inside of our action creater, and dispatch response from our fetch request.
    return (dispatch) => {

        fetch('http://localhost:3000/api/v1/collections')
        .then(resp => resp.json())
        .then(data => dispatch({
            // dispatch to our reducer.
            type: 'FETCH_COLLECTIONS', 
            payload: data
        }))
    }

    

}

// action creator function, what we return/dispatch, is an actionObject -- or just an action, which will 
// then be dispatched to our reducer returning new state based on action that has been set. 
// dispatchEvent(actionObject)