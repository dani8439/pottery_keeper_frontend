import React from 'react';
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'
import PieceEdit from '../components/PieceEdit'

class PiecesContainer extends React.Component {

    // handleEdit = (piece) => {
    //     this.setState({
    //         pieceId: piece.id
    //     })
    // }

    render() {
        return (
            <div>
                <PieceInput collection={this.props.collection}/>
                <Pieces pieces={this.props.collection && this.props.collection.pieces}/>
                <PieceEdit piece={this.props.collection && this.props.collection.pieces.piece}/>
            </div>
        )
    }

}

export default PiecesContainer 