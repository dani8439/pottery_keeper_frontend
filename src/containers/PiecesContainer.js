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

        // if (this.state.pieceToBeEdited){
        //     return (
        //         <div>
        //             <h1>Edit Piece</h1>
        //             <PieceEdit piece={this.state.pieceToBeEdited} />
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <PieceInput collection={this.props.collection}/>
        //         <Pieces pieces={this.props.collection && this.props.collection.pieces} onEdit={this.handleEdit}/>
        //     </div>
        // )
    }

}

export default PiecesContainer 