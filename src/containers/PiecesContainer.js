import React from 'react';
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'
import PieceEdit from '../components/PieceEdit'

class PiecesContainer extends React.Component {

    state = {
        pieceToBeEdited: null
    }

    handleEdit = (piece) => {
        // console.log(piece)
        this.setState({
            pieceToBeEdited: piece
        })
    }

    render() {
        // pass in handleEdit so no circular loops. So we know which one to edit.
        return (
            <div>
                <PieceInput collection={this.props.collection}/>
                <Pieces pieces={this.props.collection && this.props.collection.pieces}/>
                <PieceEdit piece={this.state.pieceToBeEdited} />
            </div>
        )
    }

}

export default PiecesContainer 