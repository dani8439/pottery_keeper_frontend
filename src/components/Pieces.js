import React from 'react';

// functional component because sending down props through PieceInput. And just rendering out the pieces. 

const Pieces = (props) => {
    console.log(props.pieces)
    debugger;


    return (
        // {/* Add in check because first time props come through, it's undefined*/}
        <div>
            {props.pieces && props.pieces.map(piece => 
            <div key={piece.id}>
                <h3>{piece.pattern_name} {piece.piece_name} - {piece.quantity}</h3>
                <img src={piece.image_url}/>
            </div>
            )}
        </div>
    )
}

export default Pieces 