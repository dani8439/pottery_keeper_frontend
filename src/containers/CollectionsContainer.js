import React from 'react';
import {connect} from 'react-redux';

import {fetchCollections} from '../actions/fetchCollections'
import CollectionInput from '../components/CollectionInput'
import Collections from '../components/Collections'

class CollectionsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCollections()

    }


    render() {
        return (
            <div>
                <CollectionInput/>
                <Collections collections={this.props.collections}/>
            </div>
        )
    }
}

// takes in state from redux store
const mapStateToProps = state => {
    return {
        collections: state.collections
    }
}

export default connect(mapStateToProps, {fetchCollections})(CollectionsContainer)