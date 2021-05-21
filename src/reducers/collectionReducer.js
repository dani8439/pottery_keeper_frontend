export default function collectionReducer(state = {collections: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            return {collections: action.payload}
        case 'ADD_COLLECTION':
            return {...state, collections: [...state.collections, action.payload] }
        case 'ADD_PIECE':
            let collections = state.collections.map(collection => {
                if (collection.id === action.payload.id) {
                    return action.payload
                } else {
                    return collection
                }
            })
            return {...state, collections: collections}

        case 'DELETE_PIECE':
            // debugger;
            let collectionsTwo = state.collections.map(collection => {
                if (collection.id === action.payload.id) {
                    return action.payload
                } else {
                    return collection
                }
            })
            return {...state, collections: collectionsTwo}
        
        case 'EDIT_COLLECTION':
            let collectionsThree = state.collections.map(collection => {
                if (collection.id === action.payload.id) {
                    return action.payload
                } else {
                    return collection
                }
            })
            return {...state, collections: collectionsThree}

        case 'EDIT_PIECE': 
            let collectionsFour = state.collections.map(collection => {
                if (collection.id === action.payload.id) {
                    return action.payload 
                } else {
                    return collection
                }
            })
            return {...state, collections: collectionsFour}        

        default: 
            return state 
    }


}