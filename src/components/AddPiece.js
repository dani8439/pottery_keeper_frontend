import React from 'react';
import { connect } from 'react-redux';
import { addPiece } from '../actions/addPiece';
import Collections from './Collections';

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
        console.log(this.props.collections.collection.id)
        // this.props.addPiece(this.state, this.props.collections.collection.id)
        // this.setState({
        //     piece_name: '',
        //     pattern_name: '',
        //     quantity: '',
        //     image_url: '',
        //     collection_id: ''
        // })

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
                    {/* not capturing collection_id, all of this is wrong */}
                    <select placeholder="Collection" name="collection"  value={this.state.collection_id} onChange={this.handleChange}>
                        {this.props.collections.map(collection => <option key={collection.id}>{collection.name}</option>)}  
                    </select><br></br>
                    <br></br>
                    <input type="submit" ></input>
                </form>
            </div>
        )
    }
}

// {props.collections.map(collection =>
//     <div key={collection.id}>
//         <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
//     </div>)}




export default connect(null, { addPiece })(AddPiece);