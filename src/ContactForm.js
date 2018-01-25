import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from "./firebase.js";
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory, Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ContactForm extends Component {

    render() {
    return (
    <div className="ContactForm">
   <MuiThemeProvider>
   <Link to="/"><RaisedButton label="View Contacts"></RaisedButton></Link>
    </MuiThemeProvider>
   
    <MuiThemeProvider>
    <Card>
    <form className="form" onSubmit={this.props.handleSubmit}>
    <CardHeader
        title="Create New Contact"
      />
        <div>
    <TextField type="text" name="firstName" hintText="eg. George" floatingLabelText="First Name" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="lastName" hintText="eg. Freeman" floatingLabelText="Last Name" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="birthday" hintText="eg. November 10, 1959" floatingLabelText="Date of Birth" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="homePhone" hintText="eg. (555) 881-3948" floatingLabelText="Home Phone" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="cellPhone" hintText="eg. (555) 940-2233" floatingLabelText="Cell Phone" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="email" hintText="eg. george_f@gmail.com" floatingLabelText="Email" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="address" hintText="eg. 435 Street Avenue" floatingLabelText="Address" onChange={this.props.handleChange}/>
        </div>
        <br />
        <button type="submit" value="Submit">Submit</button>
        <button onClick={this.props.onClick}>Cancel</button>
    </form>
    </Card>
    </MuiThemeProvider>
    </div>
    );
  }
}

export default ContactForm;
