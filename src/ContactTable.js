import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { browserHistory, Link } from 'react-router';

class ContactTable extends Component {
  render() {
    return (
      <div className="ContactTable">


{this.props.user ? (
<MuiThemeProvider>
<Link to="/create"><RaisedButton label="Create Contact"></RaisedButton></Link>

    <Table >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>First Name</TableHeaderColumn>
        <TableHeaderColumn>Last Name</TableHeaderColumn>
        <TableHeaderColumn>Birthday</TableHeaderColumn>
        <TableHeaderColumn>Home Phone</TableHeaderColumn>
        <TableHeaderColumn>Cell Phone</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Address</TableHeaderColumn>
        <TableHeaderColumn>Edit/Delete</TableHeaderColumn>
        
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {this.props.contactValues.map((contact, index)=>{
              return(
                // <TableRow key={contact.id} onClick={this.props.contactSelect}>
      
      <TableRow key={index} onClick={this.props.contactSelect}>
                <TableRowColumn>{contact.first}</TableRowColumn>
                <TableRowColumn>{contact.last}</TableRowColumn>
                <TableRowColumn>{contact.birth}</TableRowColumn>
                <TableRowColumn>{contact.home}</TableRowColumn>
                <TableRowColumn>{contact.cell}</TableRowColumn>
                <TableRowColumn>{contact.mail}</TableRowColumn>
                <TableRowColumn>{contact.address}</TableRowColumn>
                <TableRowColumn>
                    <IconButton onClick={()=> this.props.editContact(contact, index)}>
                        <EditIcon/>
                    </IconButton >
                    <IconButton onClick={()=> this.props.deleteContact(contact.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </TableRowColumn>
      </TableRow>
          )
        })}
    </TableBody>
    </Table>
</MuiThemeProvider>):(
<div>
 
  </div>

)}

    
      </div>
    );
  }
}

export default ContactTable;
