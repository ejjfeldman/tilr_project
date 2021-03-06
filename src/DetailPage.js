import React, { Component } from 'react';
import './App.css';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from "material-ui/RaisedButton";
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import outline from './outline.png';

class DetailPage extends Component {
    render() {
    return (
        <div className="DetailPage">
        {this.props.user ? (
<MuiThemeProvider>
<Link to="/"><RaisedButton label="Back to Contacts"></RaisedButton></Link>

    <Card style={{margin:10}}>
<CardHeader title={this.props.contactToEdit.first} 
      subtitle={this.props.contactToEdit.last}
      avatar={outline}/>
    <List disabled>
        <ListItem disabled
          primaryText="Home Phone"
          secondaryText={this.props.contactToEdit.home}
        />
        <ListItem disabled
          primaryText="Cell Phone"
          secondaryText={this.props.contactToEdit.cell}
        />
        <ListItem disabled
          primaryText="Birthday"
          secondaryText={this.props.contactToEdit.birth}
        />
        <ListItem disabled
          primaryText="Email"
          secondaryText={this.props.contactToEdit.mail}
        />
        <ListItem disabled
          primaryText="Address"
          secondaryText={this.props.contactToEdit.address}
        />
      </List>
      </Card>
</MuiThemeProvider>
        ):(
            <div/>
        )}

        </div>
    )
  }
}

export default DetailPage;
