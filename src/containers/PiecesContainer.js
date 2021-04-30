import React from 'react';
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'

class PiecesContainer extends React.Component {

    render() {
        return (
            <div>
                <PieceInput collection={this.props.collection}/>
                <Pieces pieces={this.props.collection && this.props.collection.pieces}/>
            </div>
        )
    }

}

export default PiecesContainer 