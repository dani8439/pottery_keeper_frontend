import React from 'react';
import { connect } from 'react-redux';
import { fetchCollections } from './actions/fetchCollections'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchCollections({type: 'FETCH_COLLECTIONS', payload: {name: 'My Pieces'}})
  }

  render(){
    return (
      <div className="App">
        Hello World!
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     collections: state.collections
//   }
// }

export default connect(null, {fetchCollections})(App);
