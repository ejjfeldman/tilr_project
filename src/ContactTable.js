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
        {/* <TableHeaderColumn>Relation</TableHeaderColumn> */}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {this.props.contactValues.map((contact)=>{
              return(
      <TableRow key={contact.id}>
                <TableRowColumn>{contact.first}</TableRowColumn>
                <TableRowColumn>{contact.last}</TableRowColumn>
                <TableRowColumn>{contact.birth}</TableRowColumn>
                <TableRowColumn>{contact.home}</TableRowColumn>
                <TableRowColumn>{contact.cell}</TableRowColumn>
                <TableRowColumn>{contact.mail}</TableRowColumn>
                <TableRowColumn>{contact.address}</TableRowColumn>
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
