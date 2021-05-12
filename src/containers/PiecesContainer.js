import React from 'react';
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'
import PieceEdit from '../components/PieceEdit'
import Piece from '../components/Piece'
import {connect} from 'react-redux'

class PiecesContainer extends React.Component {

    state = {
        pieceToBeEdited: null
    }

    handleEdit = (piece) => {
        this.setState({
            pieceToBeEdited: piece
        })
    }


    render() {

        return (
            <div>
                <PieceInput collection={this.props.collection}/>
                <Pieces pieces={this.props.collection && this.props.collection.pieces} onEdit={this.handleEdit}/>
                {/* <Piece piece={this.props.piece}/> */}
                <PieceEdit piece={this.state.pieceToBeEdited}/>
            </div>
        )
    }

}

export default PiecesContainer 