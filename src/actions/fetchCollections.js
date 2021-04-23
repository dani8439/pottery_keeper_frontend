export function fetchCollections(action) {
    // return action
    console.log('inside fetch collections')

    fetch('http://localhost:3000/api/v1/collections')
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    

}

// action creator function, what we return/dispatch, is an actionObject -- or just an action, which will 
// then be dispatched to our reducer returning new state based on action that has been set. 
// dispatchEvent(actionObject)