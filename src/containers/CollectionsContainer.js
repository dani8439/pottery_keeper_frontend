import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCollections } from '../actions/fetchCollections'
import CollectionInput from '../components/CollectionInput'
import Collections from '../components/Collections'
import Collection from '../components/Collection'
import AddPiece from '../components/AddPiece'
// import NavBar from '../components/NavBar'

class CollectionsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCollections()

    }


    render() {
        return (
            <div>
                {/* <NavBar />  */}
                <Switch>
                    <Route path='/collections/new' component={CollectionInput}/>
                    <Route path='/pieces/new' component={AddPiece}/>
                    <Route path='/collections/:id' render={(routerProps) => <Collection {...routerProps} collections={this.props.collections} />}/>
                    <Route path='/collections' render={(routerProps) => <Collections {...routerProps} collections={this.props.collections} />}/>
                </Switch>
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

export default connect(mapStateToProps, { fetchCollections })(CollectionsContainer)
