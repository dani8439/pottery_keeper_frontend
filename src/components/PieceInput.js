import React from 'react';
import {connect} from 'react-redux';


// controlled form, store state. Class component 

class PieceInput extends React.Component {

    // hold values for form in local state.
    state = {

        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: '',
        // collection_id: 
    }

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <form>
                    <h2>Add a piece to this collection:</h2>
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
                </form>
            </div>
        )
    }

}

export default connect(null)(PieceInput); 