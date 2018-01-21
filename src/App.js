import React, { Component } from 'react';
import './App.css';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User's Contacts</h1>
        </header>
        <div className="contacts">
        <ContactTable/>
        </div>
        <ContactForm/>
      </div>
    );
  }
}

export default App;
