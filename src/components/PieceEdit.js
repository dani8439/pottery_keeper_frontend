import React from 'react';
import {connect} from 'react-redux';
import {editPiece} from '../actions/editPiece'

class PieceEdit extends React.Component {

    state = {
        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let piece = {...this.state, id: this.props.piece.id}
        this.props.editPiece(piece)
        this.setState({
            piece_name: '',
            pattern_name: '',
            quantity: '',
            image_url: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Edit Piece</h1>
                <form onSubmit={this.handleSubmit}>
                <label>Piece Name:</label>
                    <input type="text" placeholder="Piece Name" name="piece_name" value={this.state.piece_name} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <label>Pattern Name:</label>
                    <input type="text" placeholder="Pattern Name" name="pattern_name" value={this.state.pattern_name} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <label>Image:</label>
                    <input type="text" placeholder="Image Url" name="image_url" value={this.state.image_url} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <label>Quantity:</label>
                    <input type="text" placeholder="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <input type="submit"></input>

                </form>
            </div>

        )
    }
}

export default connect(null, {editPiece})(PieceEdit);