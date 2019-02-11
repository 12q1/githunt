import React, { Component } from 'react';
import './App.css';
import SearchFormContainer from './components/SearchFormContainer'
import UserListContainer from './components/UserListContainer'
import UserDetailsContainer from './components/UserDetailsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>

          <div className="topbar">
            <h1>Githunt</h1>
            <p>Search for Github users</p>
            <SearchFormContainer />
          </div>

          <div className="Details">
            <UserDetailsContainer />
          </div>

          <div>
            <UserListContainer />
          </div>
          
        </main>

      </div>
    );
  }
}

export default App;
