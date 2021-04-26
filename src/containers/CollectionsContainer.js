import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCollections} from '../actions/fetchCollections'
import CollectionInput from '../components/CollectionInput'
import Collections from '../components/Collections'
import Collection from '../components/Collection'

class CollectionsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCollections()

    }


    render() {
        return (
            <div>
                <Route path='/collections/new' component={CollectionInput}/>
                <Route path='/collections/:id' render={(routerProps) => <Collection {...routerProps} collections={this.props.collections} />}/>
                <Route exact path='/collections' render={(routerProps) => <Collections {...routerProps} collections={this.props.collections} />}/>
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