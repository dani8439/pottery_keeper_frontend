import React from 'react';
import {connect} from 'react-redux';
import {editCollection} from '../actions/editCollection';


class CollectionEdit extends React.Component {

    // how to have state be existing data so it can all update and be switched?
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
                    <label>Edit Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} defaultValue={this.props.collection?.name}/><br></br>
                    <br></br>
                    <label>Edit Image:</label>
                    <input type="text" name="main_image" onChange={this.handleChange} defaultValue={this.props.collection?.main_image}/><br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

// CollectionEdit.defaultProps = {
//     collections: {}
// }

export default connect(null, {editCollection})(CollectionEdit)