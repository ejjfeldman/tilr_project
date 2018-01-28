import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from "./firebase.js";
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory, Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class EditForm extends Component {
    render() {
    return (
    <div className="EditForm">
    {this.props.user ? (
   <MuiThemeProvider>
   <Link to="/"><RaisedButton label="Return to Contacts"></RaisedButton></Link>
    <form className="form" onSubmit={this.props.handleEditSubmit}>
        <div>
    <TextField type="text" defaultValue={this.props.contactToEdit.first} name="firstName" id="first" hintText="eg. George" floatingLabelText="First Name" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.last} name="lastName" id="last" hintText="eg. Freeman" floatingLabelText="Last Name" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.birth} name="birthday" id="birth" hintText="eg. November 10, 1959" floatingLabelText="Date of Birth" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.home} name="homePhone" id="home" hintText="eg. (555) 881-3948" floatingLabelText="Home Phone" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.cell} name="cellPhone" id="cell" hintText="eg. (555) 940-2233" floatingLabelText="Cell Phone" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.mail} name="email" id="newEmail" hintText="eg. george_f@gmail.com" floatingLabelText="Email" onChange={this.props.handleEditChange}/><br/>
    <TextField type="text" defaultValue={this.props.contactToEdit.address} name="address" id="newAddress" hintText="eg. 435 Street Avenue" floatingLabelText="Address" onChange={this.props.handleEditChange}/>
        </div>
        <br />
        <RaisedButton type="submit" label="Save" value="Submit" style={{margin: 10}}></RaisedButton>
        <Link to="/"><RaisedButton label="Cancel" onClick={this.props.onClick}></RaisedButton></Link>
    </form>
    </MuiThemeProvider>
    ):(
        <div/>
    )}
    </div>
    );
  }
}

export default EditForm;
