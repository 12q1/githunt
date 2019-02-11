import React, { Component } from 'react';
import './App.css';
import SearchUser from './components/SearchUser'
import DetailContainer from './components/DetailContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Githunt</h1>
          <p>Please type the Github username of the person you are looking for.</p>
          <SearchUser/>
          <DetailContainer/>
        </main>

      </div>
    );
  }
}

export default App;
