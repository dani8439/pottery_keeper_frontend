import React from 'react';
import { connect } from 'react-redux';
import { addCollection } from '../actions/addCollection'

class CollectionInput extends React.Component {

    // controlled form

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
        this.props.addCollection(this.state)
        this.setState({
            name: '', 
            main_image: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Collection Name:</label>
                    <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/><br></br>
                    <br></br>
                    <label>Main Image:</label>
                    <input type="text" placeholder="Main Image" name="main_image" onChange={this.handleChange} value={this.state.main_image}/><br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addCollection})(CollectionInput)