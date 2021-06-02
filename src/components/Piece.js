import React from 'react';
import PieceEdit from './PieceEdit';

const Piece = (props) => {
    // console.log(props)
    return (
        <div>
            <PieceEdit piece={props.piece}/>
        </div>
    )
}

export default Piece