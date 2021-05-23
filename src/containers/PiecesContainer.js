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

    hideEdit = () => {
        console.log("hide Me")
        this.setState({
            pieceToBeEdited: null
        })
    }

    render() {
        // pass in handleEdit so no circular loops. So we know which one to edit.
        // create a conditional render. If there is no pieceToBeEdited, we render the newPiece form. 
        // if not, we render the edit form, as well as pass down the props of the piece that will be edited, and the hideEdit function 
        // that will toggle pieceToBeEdited to null, and switch once onSave event fires in the child component, in the handleSubmit Event. 
        return (
            <div>
                {
                    !this.state.pieceToBeEdited && <PieceInput collection={this.props.collection}/>
                }
                {
                    this.state.pieceToBeEdited && <PieceEdit piece={this.state.pieceToBeEdited} onSave={this.hideEdit} />
                }
                <Pieces pieces={this.props.collection && this.props.collection.pieces} onEdit={this.handleEdit} />

            </div>
        )
    }

}

export default PiecesContainer 