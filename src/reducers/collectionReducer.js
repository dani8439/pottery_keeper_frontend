import update from 'immutability-helper'

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
            console.log('Edit Piece')
            console.log(action.payload)
            let collectionEdit = state.collections.filter(collection => {
                if (collection.id === action.payload.collection_id) {
                    return update(state, {
                        pieces: {
                            [action.id]: {
                                piece:{$set: action.payload}
                            }
                        }
                    })
                } else {
                    return collection 
                }

            })
    
        
            // let collectionEdit = state.collections.filter(collection => {
            //     if (collection.id === action.payload.collection_id) {
            //         return collection
            //     } 
            // })
            // console.log(collectionEdit)
            // let newPieces = collectionEdit.pieces.map(piece => {
            //     if (piece.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return piece
            //     }
                
            // })
            // collectionEdit.pieces = newPieces
            // let collectionsFour = state.collections.map(collection => {
            //     if (collection.id === collectionEdit.id) {
            //         return collectionEdit
            //     } else {
            //         return collection
            //     }
            // })

            // return {...state, collections: collectionsFour}
            

        default: 
            return state 
    }


}