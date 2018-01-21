import React, { Component } from 'react';
import './App.css';
import ContactTable from './ContactTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User's Contacts</h1>
        </header>
        <p className="App-intro">
        <ContactTable/>
        </p>
      </div>
    );
  }
}

export default App;
