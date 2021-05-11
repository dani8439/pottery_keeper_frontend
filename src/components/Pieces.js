import React from 'react';
import {connect} from 'react-redux';
import {deletePiece} from '../actions/deletePiece';
import {editPiece} from '../actions/editPiece';
import Piece from './Piece';

// functional component because sending down props through PieceInput. And just rendering out the pieces. 

const Pieces = (props) => {
    console.log(props.pieces)


    // because functional component, have to define with const keyword.
    const handleDelete = (piece) => {
        props.deletePiece(piece.id, piece.collection_id)
    }

    const handleEdit = (piece) => {
        props.editPiece(piece, piece.collection_id)
    }
    



    return (
        // {/* Add in check because first time props come through, it's undefined. With react, when you refresh page, state and store are cleared out.*/}
        <div>
            {props.pieces && props.pieces.map(piece => 
            <div key={piece.id}>
                <h3>{piece.pattern_name} {piece.piece_name} - {piece.quantity}</h3>
                <img src={piece.image_url}/>
                <br></br>
                <button onClick={() => handleEdit(piece)}>Edit</button>
                <button onClick={() => handleDelete(piece)}>Delete</button>
                
            </div>
            )}
        </div>
    )
}

export default connect(null, {deletePiece, editPiece})(Pieces) 