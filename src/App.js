import React from 'react';
import CollectionsContainer from './containers/CollectionsContainer'
import NavBar from './components/NavBar'

class App extends React.Component {


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


export default App;

