import React from 'react';
import { connect } from 'react-redux';
import { deletePiece } from '../actions/deletePiece';
import { editPiece } from '../actions/editPiece';

// switched over to Class Component so can manipulate state and search for pieces? 

class Pieces extends React.Component {
    state = {
        // pieces: [],
        search: ""
    }



    handleDelete = (piece) => {
        this.state.deletePiece(piece.id, piece.collection_id)
    }

    handleInputChange = (e) => {
        console.log(this.state)
        const search = e.target.value 
        this.setState({search: search})
    }

    makePieceCards() {
        let displayedPieces = this.props.pieces
        // console.log(this.state.seach)
        if(this.state.search){
            displayedPieces = this.props.pieces && this.props.pieces.filter((piece) => piece.piece_name.toLowerCase().includes(this.state.search.toLowerCase()))
        }

        // {/* Add in check because first time props come through, it's undefined. With react, when you refresh page, state and store are cleared out.*/}

        return displayedPieces && displayedPieces.map(piece =>
            <div className="card" key={piece.id}>
                <h3>{piece.pattern_name} {piece.piece_name} - {piece.quantity}</h3>
                <img src={piece.image_url} alt="pieces" className="smallImage"/>
                <br></br>
                <button onClick={() => this.props.onEdit(piece)}>EDIT</button>
                <button onClick={() => this.state.handleDelete(piece)}>DELETE</button>
            </div>
            )

    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Search for a piece..." onChange={this.handleInputChange} /><br></br>
                {this.makePieceCards()}
            </div>
        )

    }

}

export default connect(null, { deletePiece, editPiece })(Pieces)
