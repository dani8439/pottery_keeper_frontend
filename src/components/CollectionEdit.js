import React from 'react';
import {connect} from 'react-redux';
import {editCollection} from '../actions/editCollection';


class CollectionEdit extends React.Component {

    state = {
        name: '', 
        main_image: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let collection = {...this.state, id: this.props.collection.id}
        this.props.editCollection(collection)
        this.setState({
            name: '', 
            main_image: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit Collection Name:</label>
                    <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/><br></br>
                    <br></br>
                    <label>Edit Main Image:</label>
                    <input type="text" placeholder="Main Image" name="main_image" onChange={this.handleChange} value={this.state.main_image}/><br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {editCollection})(CollectionEdit)