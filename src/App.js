import React, { Component } from 'react';
import './App.css';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state={
        firstName: '',
        lastName: '',
        birthday: '',
        homePhone: '',
        cellPhone: '',
        email: '',
        address: '',
       contactValues:[],
       showForm: false
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.onClick = this.onClick.bind(this);
  this.contactSelect= this.contactSelect.bind(this);
  }

  componentDidMount(){
    const contactsRef = firebase.database().ref('contactValues');
    contactsRef.on('value',(snap)=>{
      let contactValues = snap.val();
      // populate new array with results from value listener
      let newState = [];
      for(let contact in contactValues){
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


  handleChange(event){
    this.setState({[event.target.name]:event.target.value});
    console.log("here");
    console.log({[event.target.name]:event.target.value});
}

handleSubmit(event) {
  console.log({[event.target.name]:event.target.value});
  event.preventDefault();
  const contactsRef = firebase.database().ref('contactValues');
  const contact = {
    first: this.state.firstName,
    last: this.state.lastName,
    birth: this.state.birthday,
    home: this.state.homePhone,
    cell: this.state.cellPhone,
    mail: this.state.email,
    address: this.state.address
  }
  contactsRef.push(contact);
  this.setState({
    firstName: '',
    lastName: '',
    birthday: '',
    homePhone: '',
    cellPhone: '',
    email: '',
    address: '',
    showForm: false
  })

}

onClick(event){
  event.preventDefault();
  console.log("clicked");
  this.setState({showForm: !this.state.showForm})
}

contactSelect(){
console.log("select")
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User's Contacts</h1>
        </header>
        <MuiThemeProvider>
        <div>

        <RaisedButton label="Create Contact" primary={true} onClick={this.onClick}/>
        <RaisedButton className="editButton" label="Edit"/>
        <RaisedButton className="deleteButton" label="Delete" backgroundColor="#d33a34"/>
       </div>
       </MuiThemeProvider>
        <div className="contacts">
        {!this.state.showForm && <ContactTable 
        contactValues={this.state.contactValues}
        contactSelect={this.state.contactSelect}/>}
        </div>
        {this.state.showForm &&
        <ContactForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        contactValues={this.state.contactValues}
        showForm={this.state.showForm}
        onClick={this.onClick}/>}
      </div>
    );
  }
}

export default App;
