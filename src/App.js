import React from 'react';
// import { connect } from 'react-redux';
// import { fetchCollections } from './actions/fetchCollections'
import CollectionsContainer from './containers/CollectionsContainer'
import NavBar from './components/NavBar'

class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchCollections({type: 'FETCH_COLLECTIONS', payload: {name: 'My Pieces'}})
  // }

  render(){
    return (
      <div className="App">
        <NavBar />
        <h1>Welcome to Pottery Keeper!</h1>
        <CollectionsContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     collections: state.collections
//   }
// }

export default App;
// export default connect(null, {fetchCollections})(App);
