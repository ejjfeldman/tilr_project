import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Link } from 'react-router';



class CreateUser extends Component {

  render() {
    return (
      <div className="createUser">
    <MuiThemeProvider>
<form>
<TextField type="text" name="fullName" hintText="eg. George Freeman" floatingLabelText="Full Name" /><br/>
    <TextField type="text" name="userEmail" hintText="eg. Freeman" floatingLabelText="Email" /><br/>
    <TextField type="text" name="userBirthday" hintText="eg. November 10, 1959" floatingLabelText="Date of Birth" /><br/>
    <TextField type="text" name="userPassword" floatingLabelText="Password" /><br/>
</form>
    </MuiThemeProvider>
      </div>
    );
  }
}

export default CreateUser;
