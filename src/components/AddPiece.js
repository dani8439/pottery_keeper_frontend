import React from 'react';
import { connect } from 'react-redux';
import { addPiece } from '../actions/addPiece'

class AddPiece extends React.Component {

    state = {
        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: '',
        collection_id: ''
        
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
            image_url: '',
            collection_id: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add a Piece to A Collection:</h2>
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
                    <label>Collection:</label>
                    <select placeholder="Collection" name="collection_id" value={this.state.collection_id} onChange={this.handleChange}>
                        <option></option>
                    </select><br></br>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}



export default connect(null, { addPiece })(AddPiece);