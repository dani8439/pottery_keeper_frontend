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
        if (this.state.pieceToBeEdited){
            return (
                <div>
                    <h1>Edit Piece</h1>
                    <PieceEdit piece={this.state.pieceToBeEdited} />
                </div>
            )
        }
        return (
            <div>
                <PieceInput collection={this.props.collection}/>
                <Pieces pieces={this.props.collection && this.props.collection.pieces} onEdit={this.handleEdit}/>
            </div>
        )
    }

}

export default PiecesContainer 