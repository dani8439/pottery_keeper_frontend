import React from 'react';
import { connect } from 'react-redux';
import { addPiece } from '../actions/addPiece';

class AddPiece extends React.Component {

    state = {
        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: '',
        collection_id: ''
        
    }

    componentDidUpdate(prevProps) {
        // When the collections change, i.e. new props set 
        if (prevProps.collections !== this.props.collections) {
            if (this.props.collections.length > 0) {
                // Set initial value of collection_id in state - a new piece will be added to this collection unless the 
                // user picks a different one. 
                this.setState({
                    piece_name: '',
                    pattern_name: '',
                    quantity: '',
                    image_url: '',
                    collection_id: this.props.collections[0].id

                })
            }
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        // pass in the local collection_id since it can be changed by the user, instead of the props one that we use when adding to a fixed collection
        this.props.addPiece(this.state, this.state.collection_id)
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
                    {/* Thought was wrong, but it's all right :-D.*/}
                    <select placeholder="Collection" name="collection_id"  value={this.state.collection_id} onChange={this.handleChange}>
                        {this.props.collections.map(collection => <option key={collection.id}>{collection.name}</option>)}  
                    </select><br></br>
                    <br></br>
                    <input type="submit" ></input>
                </form>
            </div>
        )
    }
}


export default connect(null, { addPiece })(AddPiece);