import React from 'react';
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'

class PiecesContainer extends React.Component {

    render() {
        return (
            <div>
                <PieceInput />
                <Pieces pieces={this.props.collection && this.props.collection.pieces}/>
            </div>
        )
    }

}

export default PiecesContainer 