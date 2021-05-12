import React from 'react';
import PieceEdit from './PieceEdit';

const Piece = (props) => {
    // console.log(props)
    // let piece = props.pieces.filter(piece => piece.id === props.match.params.id)[0]
    // console.log(piece)

    return (
        <div>

            <PieceEdit />
        </div>
    )

}

export default Piece
