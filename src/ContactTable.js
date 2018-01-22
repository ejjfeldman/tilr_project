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

class ContactTable extends Component {
  render() {
    return (
      <div className="ContactTable">
<MuiThemeProvider>
    <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>First Name</TableHeaderColumn>
        <TableHeaderColumn>Last Name</TableHeaderColumn>
        <TableHeaderColumn>Birthday</TableHeaderColumn>
        <TableHeaderColumn>Home Phone</TableHeaderColumn>
        <TableHeaderColumn>Cell Phone</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Address</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        
        {/* <TableHeaderColumn>Relation</TableHeaderColumn> */}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {this.props.contactValues.map((contact)=>{
              return(
      <TableRow key={contact.id} onClick={this.props.contactSelect}>
                <TableRowColumn>{contact.first}</TableRowColumn>
                <TableRowColumn>{contact.last}</TableRowColumn>
                <TableRowColumn>{contact.birth}</TableRowColumn>
                <TableRowColumn>{contact.home}</TableRowColumn>
                <TableRowColumn>{contact.cell}</TableRowColumn>
                <TableRowColumn>{contact.mail}</TableRowColumn>
                <TableRowColumn>{contact.address}</TableRowColumn>
                <TableRowColumn><RaisedButton className="deleteButton" label="Delete" backgroundColor="#d33a34" onClick={()=> this.props.deleteContact(contact.id)}/></TableRowColumn>
      </TableRow>
          )
        })}
    </TableBody>
    </Table>
</MuiThemeProvider>
    
      </div>
    );
  }
}

export default ContactTable;
