import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import UserListContainer from './components/UserListContainer'
import UserDetailsContainer from './components/UserDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Githunt</h1>
          <p>Search for Github users</p>
          <SearchForm />
          <UserDetailsContainer />
          <UserListContainer />

        </main>

      </div>
    );
  }
}

export default App;
