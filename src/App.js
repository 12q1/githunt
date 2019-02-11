import React, { Component } from 'react';
import './App.css';
import SearchUser from './components/SearchUser'
import UserListContainer from './components/UserListContainer'
import UserDetailsContainer from './components/UserDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>Githunt</h1>
          <p>Please type the Github username of the person you are looking for.</p>
          <SearchUser/>
          <UserListContainer/>
          <UserDetailsContainer/>
        </main>

      </div>
    );
  }
}

export default App;
