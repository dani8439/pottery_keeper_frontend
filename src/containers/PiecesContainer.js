import React from 'react';
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'
import PieceEdit from '../components/PieceEdit'
import {connect} from 'react-redux'

class PiecesContainer extends React.Component {

    // state = {
    //     isEditing: false
    // }

    handleEdit = (piece) => {
        this.setState({
            pieceId: piece.id
        })
    }

    // toggleEdit() {
    //     this.setState({isEditing: !this.state.isEditing})
    // }

    render() {
        // if (this.state.isEditing) {
        //     return (
        //         <div>
        //             <h1>Edit Piece</h1>
        //             <piece form coming soon />
        //         </div>
        //     )
        // }
        return (
            <div>
                <PieceInput collection={this.props.collection}/>
                <Pieces pieces={this.props.collection && this.props.collection.pieces}/>
                {/* Conditional render if when button is clicked?  */}
                {/* <PieceEdit piece={this.props.collection && this.props.collection.pieces.piece}/> */}
            </div>
        )
    }

}

export default PiecesContainer 