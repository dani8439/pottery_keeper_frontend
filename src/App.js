import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/collections')
    .then(resp => resp.json())
    .then(resp => console.log(resp))
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
