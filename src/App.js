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
            <h1 className="title">Githunt</h1>
            <p className="blurb">Search for Github users</p>
            <div className="search">
              <SearchFormContainer />
            </div>
          </div>

          <div className="list">
            <UserListContainer />
          </div>

          <div className="details">
            <UserDetailsContainer />
          </div>

        </main>

      </div>
    );
  }
}

export default App;
