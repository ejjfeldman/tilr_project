import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ContactForm extends Component {
  constructor(props){
      super(props);

     
  }

    render() {
    return (
    <div className="ContactForm">
    <MuiThemeProvider>
    <Card>
    <form className="form" onSubmit={this.props.handleSubmit}>
    <CardHeader
        title="Create New Contact"
        // subtitle="Subtitle"
        // actAsExpander={true}
        // showExpandableButton={true}
      />
        <div>
        <label>
        First Name: <input type="text" name="firstName" placeholder="First Name" onChange={this.props.handleChange}/>
        </label>
        <label>
        Last Name: <input type="text" name="lastName" placeholder="Last Name" onChange={this.props.handleChange}/>
        </label>
        <label>
            Birthday: <input type="text" name="birthday" placeholder="Birthday" onChange={this.props.handleChange}/>
        </label>
        </div>
        <div>
        <label>
            Home Phone: <input type="text" name="homePhone" placeholder="Home Phone" onChange={this.props.handleChange}/>
        </label>
        <label>
            Cell Phone: <input type="text" name="cellPhone" placeholder="Cell Phone" onChange={this.props.handleChange}/>
        </label>
        <label>
            Email: <input type="text" name="email" placeholder="Email" onChange={this.props.handleChange}/>
        </label>
        </div>
        <div>
        <label>
            Address: <input type="text" name="address" placeholder="Address" onChange={this.props.handleChange}/>
        </label>
        {/* <label>
            Relation
        <select value={}>
            <option value="familyRelation">Family</option>
            <option value="friendRelation">Friend</option>
            <option value="workRelation">Colleague</option>
            <option value="otherRelation">Other</option>
        </select>
        </label> */}
        {/* <label>
            Notes: <textarea type="text" name="notes" placeholder="Additional notes" onChange={this.props.handleChange}/>
        </label> */}
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
