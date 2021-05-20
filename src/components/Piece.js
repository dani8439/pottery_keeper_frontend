import React from 'react';
import PieceEdit from './PieceEdit';

class Piece extends React.Component {
    render() {
        return (
            <div>
                <PieceEdit piece={this.props.piece} />
            </div>
        )
    }
}

export default Piece