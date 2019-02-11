import React, { Component } from 'react';
import './App.css';
import SearchFormContainer from './components/SearchFormContainer'
import UserListContainer from './components/UserListContainer'
import UserDetailsContainer from './components/UserDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Githunt</h1>
          <p>Search for Github users</p>
          <SearchFormContainer />
          <UserDetailsContainer />
          <UserListContainer />

        </main>

      </div>
    );
  }
}

export default App;
