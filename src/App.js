import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/collections/1/pieces')
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

export default App;
