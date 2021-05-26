import React from 'react';
import CollectionsContainer from './containers/CollectionsContainer'
import NavBar from './components/NavBar'
import './App.css';



class App extends React.Component {


  render(){
    return (
      <div className="App">
        <NavBar />
        <h1>Pottery Keeper</h1>
        <CollectionsContainer />
      </div>
    );
  }
}


export default App;

