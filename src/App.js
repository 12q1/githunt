import React, { Component } from 'react';
import './App.css';
import SearchUser from './components/SearchUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <SearchUser/>
        </main>

      </div>
    );
  }
}

export default App;
