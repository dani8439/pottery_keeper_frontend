import React from 'react';

// functional component because sending down props through PieceInput. And just rendering out the pieces. 

const Pieces = (props) => {


    return (
        <div>
            {/*{props.pieces.map(piece => 
                <li key={piece.id}>{piece.pattern_name} {piece.piece_name} {piece.image_url} {piece.quantity}</li>
            )} */}
        </div>
    )
}

export default Pieces 