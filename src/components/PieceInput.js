import React from 'react';
import { connect } from 'react-redux';
import { addPiece } from '../actions/addPiece';


// controlled form, store state. Class component

class PieceInput extends React.Component {

    // hold values for form in local state.
    state = {

        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPiece(this.state, this.props.collection.id)
        this.setState({
            piece_name: '',
            pattern_name: '',
            quantity: '',
            image_url: ''
        })

    }

    render() {
        return (
            <div className="new-piece-card">
                <form onSubmit={this.handleSubmit}>
                    <h1>Add a piece to this collection:</h1>
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


export default connect(null, { addPiece })(PieceInput);

