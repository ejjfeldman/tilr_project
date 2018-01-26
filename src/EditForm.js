import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from "./firebase.js";
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory, Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class EditForm extends Component {

    render() {
    return (
    <div className="EditForm">
   <MuiThemeProvider>
   <Link to="/"><RaisedButton label="Return to Contacts"></RaisedButton></Link>
    </MuiThemeProvider>
   
    <MuiThemeProvider>
    <Card>
    <form className="form" onSubmit={this.props.handleEditSubmit}>
    <CardHeader
        title="Edit Contact"
      />
      {/* change name field */}
        <div>
    <TextField type="text" defaultValue={this.props.contactToEdit.first} id="first" hintText="eg. George" floatingLabelText="First Name" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.last} id="last" hintText="eg. Freeman" floatingLabelText="Last Name" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.birth} id="birth" hintText="eg. November 10, 1959" floatingLabelText="Date of Birth" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.home} id="home" hintText="eg. (555) 881-3948" floatingLabelText="Home Phone" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.cell} id="cell" hintText="eg. (555) 940-2233" floatingLabelText="Cell Phone" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.mail} id="newEmail" hintText="eg. george_f@gmail.com" floatingLabelText="Email" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.address} id="newAddress" hintText="eg. 435 Street Avenue" floatingLabelText="Address" onChange={this.props.handleEditChange}/>
        </div>
        <br />
        <button type="submit" value="Submit">Save</button>
        <Link to="/"><button onClick={this.props.onClick}>Cancel</button></Link>
    </form>
    </Card>
    </MuiThemeProvider>
    </div>
    );
  }
}

export default EditForm;
