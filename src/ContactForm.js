import React, { Component } from 'react';
import './App.css';
import RaisedButton from "material-ui/RaisedButton";
import { browserHistory, Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ContactForm extends Component {
    onCancel(){
        browserHistory.push('/')
    }
    render() {
    return (
    <div className="ContactForm">
    {this.props.user?( 
   <MuiThemeProvider>
   <Link to="/"><RaisedButton label="View Contacts"></RaisedButton></Link>
    <form className="form" onSubmit={this.props.handleSubmit}>
        <div>
    <TextField type="text" name="firstName" hintText="eg. George" floatingLabelText="First Name" required onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="lastName" hintText="eg. Freeman" floatingLabelText="Last Name" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="birthday" hintText="eg. November 10, 1959" floatingLabelText="Date of Birth" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="homePhone" hintText="eg. (555) 881-3948" floatingLabelText="Home Phone" pattern="\d{3}\d{3}\d{4}"onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="cellPhone" hintText="eg. (555) 940-2233" floatingLabelText="Cell Phone" onChange={this.props.handleChange}/><br/>
    <TextField type="email" name="email" hintText="eg. george_f@gmail.com" floatingLabelText="Email" onChange={this.props.handleChange}/><br/>
    <TextField type="text" name="address" hintText="eg. 435 Street Avenue" floatingLabelText="Address" onChange={this.props.handleChange}/>
        </div>
        <br />
        <RaisedButton type="submit" value="Submit" label="Submit" style={{margin: 10}}></RaisedButton>
        <RaisedButton type="cancel" onClick={this.onCancel} label="Cancel"></RaisedButton>
    </form>
    </MuiThemeProvider>
    ):(
        <div/>
)}
    </div>
    );
  }
}

export default ContactForm;
