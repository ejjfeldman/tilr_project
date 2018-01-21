import React, { Component } from 'react';
import './App.css';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state={
      formValues:{
        firstName: '',
        lastName: '',
        birthday: '',
        homePhone: '',
        cellPhone: '',
        email: '',
        address: '',
        notes: ''
      }

  };
  // this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value});
    console.log("here");
    console.log({[event.target.name]:event.target.value});
}

// handleSubmit(event) {
//   console.log({[event.target.name]:event.target.value});
//   event.preventDefault();
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User's Contacts</h1>
        </header>
        <div className="contacts">
        <ContactTable/>
        </div>
        <ContactForm 
        handleChange={this.handleChange}
        formValues={this.state.formValues}/>
      </div>
    );
  }
}

export default App;
