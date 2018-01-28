import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";
import EditIcon from "material-ui/svg-icons/image/edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import MoreIcon from "material-ui/svg-icons/navigation/more-horiz";

import { Link } from "react-router";
import { Card } from "material-ui/Card";

class ContactTable extends Component {
  
  constructor(props) {
    super(props);

    this.sortColumns = this.sortColumns.bind(this);
    this.compareValues = this.compareValues.bind(this);
  }

  //Sorting columns
  compareValues(columnName) {
    return function(a, b) {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    };
  }

  sortColumns(columnName) {
    let contactCopy = this.props.contactValues;
    contactCopy.sort(this.compareValues(columnName));
    this.setState({ contactValues: contactCopy });
  }

  render() {
    return (
      <div className="ContactTable">
        {this.props.user ? (
          <MuiThemeProvider>
            <Link to="/create">
              <RaisedButton label="Create Contact" />
            </Link>

            <Card style={{ margin: 10 }}>
              <Table id="myTable">
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn>
                      <div className="sortTable" onClick={() => this.sortColumns("first")}>
                        First Name
                      </div>
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                      <div className="sortTable" onClick={() => this.sortColumns("last")}>
                        Last Name
                      </div>
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                      <div className="sortTable" onClick={() => this.sortColumns("home")}>
                        Home Phone
                      </div>
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                      <div className="sortTable" onClick={() => this.sortColumns("cell")}>
                        Cell Phone
                      </div>
                    </TableHeaderColumn>
                    <TableHeaderColumn>Details/Edit/Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {this.props.contactValues.map((contact, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn>{contact.first}</TableRowColumn>
                        <TableRowColumn>{contact.last}</TableRowColumn>
                        <TableRowColumn>{contact.home}</TableRowColumn>
                        <TableRowColumn>{contact.cell}</TableRowColumn>
                        <TableRowColumn>
                          <IconButton onClick={() => this.props.handleDetails(contact, index)}>
                            <MoreIcon />
                          </IconButton>
                          <IconButton onClick={() => this.props.editContact(contact, index)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => this.props.deleteContact(contact.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableRowColumn>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </MuiThemeProvider>
        ) : (
          <div />
        )}
        {this.props.contactValues.length == 0 ? (
          <h2>Please Create Your First Contact</h2>
        ):(
          <div></div>
        )}
      </div>
    );
  }
}

export default ContactTable;
