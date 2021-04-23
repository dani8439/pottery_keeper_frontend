export default function collectionReducer(state = {collections: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            return {collections: action.payload}
        default: 
            return state 
    }


}