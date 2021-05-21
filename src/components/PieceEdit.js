import React from 'react';
import { connect } from 'react-redux';
import { editPiece } from '../actions/editPiece'

class PieceEdit extends React.Component {

    state = {
        collection_id: '',
        piece_name: '',
        pattern_name: '',
        quantity: '',
        image_url: ''
    }


    componentDidMount() {
        this.setState({
            collection_id: this.props.piece?.collection_id,
            piece_name: this.props.piece?.piece_name,
            pattern_name: this.props.piece?.pattern_name,
            quantity: this.props.piece?.quantity,
            image_url: this.props.piece?.image_url

        })
        console.log("COMPONENT DID MOUNT?")
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let piece = {...this.state, id: this.props.piece.id}
        // console.log(this.state)
        // console.log(piece)
        console.log(this.props.piece)
        this.props.editPiece(piece)
        // this.resetForm()
        // this.setState({
        //     collection_id: '',
        //     piece_name: '',
        //     pattern_name: '',
        //     quantity: '',
        //     image_url: ''
        // })

    }

    // resetForm = () => {
    //     this.setState({
    //         collection_id: '',
    //         piece_name: '',
    //         pattern_name: '',
    //         quantity: '',
    //         image_url: ''
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Edit Piece</h1>
                <form onSubmit={this.handleSubmit}>
                <label>Piece Name:</label>
                    <input type="text" placeholder="Piece Name" name="piece_name" defaultValue={this.props.piece?.piece_name} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <label>Pattern Name:</label>
                    <input type="text" placeholder="Pattern Name" name="pattern_name" defaultValue={this.props.piece?.pattern_name} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <label>Image:</label>
                    <input type="text" placeholder="Image Url" name="image_url" defaultValue={this.props.piece?.image_url} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <label>Quantity:</label>
                    <input type="text" placeholder="Quantity" name="quantity" defaultValue={this.props.piece?.quantity} onChange={this.handleChange}/><br></br>
                    <br></br>
                    <input type="submit"></input>

                </form>
            </div>

        )
    }
}

export default connect(null, {editPiece})(PieceEdit);
