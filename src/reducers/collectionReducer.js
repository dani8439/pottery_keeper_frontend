export default function collectionReducer(state = {collections: []}, action) {

    return action.payload
    // just to show that our action is coming in correctly and the store can properly be updated by the reducer.

}