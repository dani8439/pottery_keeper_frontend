import React from 'react';
import { connect } from 'react-redux';
import { deletePiece } from '../actions/deletePiece';
import { editPiece } from '../actions/editPiece';

// functional component because sending down props through PieceInput. And just rendering out the pieces.

class Pieces extends React.Component {
    // console.log(props.pieces)


    // because functional component, have to define with const keyword.
    handleDelete = (piece) => {
        this.state.deletePiece(piece.id, piece.collection_id)
    }


    render() {
        return (
            // {/* Add in check because first time props come through, it's undefined. With react, when you refresh page, state and store are cleared out.*/}
            <div>
                {this.props.pieces && this.props.pieces.map(piece =>
                <div className="card" key={piece.id}>
                    <h3>{piece.pattern_name} {piece.piece_name} - {piece.quantity}</h3>
                    <img src={piece.image_url} alt="pieces" className="smallImage"/>
                    <br></br>
                    <button onClick={() => this.props.onEdit(piece)}>EDIT</button>
                    <button onClick={() => this.props.handleDelete(piece)}>DELETE</button>
                </div>
                )}
            </div>
        )

    }

}

export default connect(null, { deletePiece, editPiece })(Pieces)
