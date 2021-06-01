import React from 'react';
import { connect } from 'react-redux';
import { deletePiece } from '../actions/deletePiece';
import { editPiece } from '../actions/editPiece';


class Pieces extends React.Component {
    state = {
        pieces: []

    }


    handleDelete = (piece) => {
        this.props.deletePiece(piece.id, piece.collection_id)
    }

    makePieceCards() {
        // {/* Add in check because first time props come through, it's undefined. With react, when you refresh page, state and store are cleared out.*/}
        return this.props.pieces && this.props.pieces.map(piece => 
            <div className="card" key={piece.id}>
                <h3>{piece.pattern_name} {piece.piece_name} - {piece.quantity}</h3>
                <img src={piece.image_url} alt="pieces" className="smallImage"/>
                <br></br>
                <button onClick={() => this.props.onEdit(piece)}>EDIT</button>
                <button onClick={() => this.handleDelete(piece)}>DELETE</button>
            </div>
            )
    }

    render() {
        return (
            
            <div>
                {this.makePieceCards()}
            </div>
        )

    }
}

export default connect(null, { deletePiece, editPiece })(Pieces)
