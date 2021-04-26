import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
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
                <Route path='/collections/new' component={CollectionInput}/>
                <Route exact path='/collections' render={() => <Collections collections={this.props.collections} />}/>
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