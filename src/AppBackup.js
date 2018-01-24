import React, { Component } from "react";
import "./App.css";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import SigninBar from "./SigninBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import { Route, Link } from "react-router-dom";
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthday: "",
      homePhone: "",
      cellPhone: "",
      email: "",
      address: "",
      contactValues: [],
      showForm: false,
      isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.contactSelect = this.contactSelect.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  componentDidMount() {
    const contactsRef = firebase.database().ref("contactValues");
    contactsRef.on("value", snap => {
      let contactValues = snap.val();
      // populate new array with results from value listener
      let newState = [];
      for (let contact in contactValues) {
        newState.push({
          id: contact,
          first: contactValues[contact].first,
          last: contactValues[contact].last,
          birth: contactValues[contact].birth,
          home: contactValues[contact].home,
          cell: contactValues[contact].cell,
          mail: contactValues[contact].mail,
          address: contactValues[contact].address
        });
      }
      //update state with pushed values from database
      this.setState({
        contactValues: newState
      });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log("here");
    console.log({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log({ [event.target.name]: event.target.value });
    event.preventDefault();
    const contactsRef = firebase.database().ref("contactValues");
    const contact = {
      first: this.state.firstName,
      last: this.state.lastName,
      birth: this.state.birthday,
      home: this.state.homePhone,
      cell: this.state.cellPhone,
      mail: this.state.email,
      address: this.state.address
    };
    contactsRef.push(contact);
    this.setState({
      firstName: "",
      lastName: "",
      birthday: "",
      homePhone: "",
      cellPhone: "",
      email: "",
      address: "",
      showForm: false
    });
  }

  changeForm(event) {
    event.preventDefault();
    console.log("clicked");
    this.setState({ showForm: !this.state.showForm });
    console.log(this.state.showForm);
  }

  contactSelect() {
    console.log("select");
  }

  deleteContact(contactId) {
    console.log(contactId);
    const contactRef = firebase.database().ref(`/contactValues/${contactId}`);
    contactRef.remove();
  }

  editContact(contactId) {
    const contactRef = firebase.database().ref(`/contactValues/${contactId}`);
    console.log(contactRef);
  }

  render() {
    return (
      <div className="App">
        {/* sign in/sign out bar */}
        {this.state.isAuthenticated ? (
          <MuiThemeProvider>
            <AppBar
              showMenuIconButton={false}
              title={<span>User's Contacts</span>}
              iconElementRight={<RaisedButton label="Sign Out" />}
            />
          </MuiThemeProvider>
        ) : (
          <MuiThemeProvider>
            <AppBar
              showMenuIconButton={false}
              title={<span>User's Contacts</span>}
              iconElementRight={<RaisedButton label="Sign In" />}
            />
          </MuiThemeProvider>
        )}

        <header className="App-header" />





{!this.state.isAuthenticated ? (
        <div className="contacts">
           {!this.state.showForm && (
           <ContactTable
               contactValues={this.state.contactValues}
              contactSelect={this.state.contactSelect}
              deleteContact={this.deleteContact}
             editContact={this.editContact}
             changeForm={this.changeForm}
           />
         )}
        </div>
):(
<SigninBar
          authWithEmail={this.authWithEmail}
          authenticate={this.authenticate}
          isAuthenticated={this.state.isAuthenticated}
        />

)}

{!this.state.isAuthenticated ? (
  <div>
        {this.state.showForm && (
          <ContactForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
             contactValues={this.state.contactValues}
             showForm={this.state.showForm}
             changeForm={this.changeForm}
          />
       )}
       </div>
      ):(
<SigninBar
          authWithEmail={this.authWithEmail}
          authenticate={this.authenticate}
          isAuthenticated={this.state.isAuthenticated}
        />

      )} 
        


       </div>
     );
   }
}

export default App;
