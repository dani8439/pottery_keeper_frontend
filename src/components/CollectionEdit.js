import React from 'react';
import { connect } from 'react-redux';
import { editCollection } from '../actions/editCollection';


class CollectionEdit extends React.Component {

    state = {
        name: '',
        main_image: ''
    }

    componentDidMount() {
        this.setState({
            name: this.props.collection?.name,
            main_image: this.props.collection?.main_image
        })
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
        // console.log("Hide me after clicked")
        this.props.endEditing()
    }


    render() {
        return (
            <div className="edit-collection-card">
                <h1>Edit Collection</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Edit Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} defaultValue={this.props.collection?.name}/><br></br>
                    <br></br>
                    <label>Edit Image:</label>
                    <input type="text" name="main_image" onChange={this.handleChange} defaultValue={this.props.collection?.main_image}/><br></br>
                    <br></br>
                    <input type="submit" value="Update Collection"/>
                </form>
            </div>
        )
    }

}


export default connect(null, { editCollection })(CollectionEdit)
