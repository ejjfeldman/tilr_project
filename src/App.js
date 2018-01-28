import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import firebase, { auth, provider } from "./firebase.js";
import "./App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import Avatar from 'material-ui/Avatar';


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
      user: null,
      uid: '',
      contactToEdit: {},
      contactInArray: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.getUserContacts = this.getUserContacts.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDetails=this.handleDetails.bind(this);
    this.clearState=this.clearState.bind(this);
  }

  //Ensuring content is loading when user is still signed in
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user,
        uid: user.uid 
      });
      const uid = this.state.uid;
      this.getUserContacts(uid);
      }
    });
  }

  getUserContacts(uid){
    let user = this.state.user;
    const userRef = firebase.database().ref().child(String(uid));
    userRef.on('value', snap=>{
      let contactValues = snap.val();
      let newState = [];
      for (let contact in contactValues){
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
      this.setState({
        contactValues:newState
      })
    })
}

//Handling Contact Creation

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let uid = this.state.uid;
    const userRef = firebase.database().ref(uid);
    const contact = {
      first: this.state.firstName,
      last: this.state.lastName,
      birth: this.state.birthday,
      home: this.state.homePhone,
      cell: this.state.cellPhone,
      mail: this.state.email,
      address: this.state.address,
      uid:this.state.uid
    };
    userRef.push(contact);
    this.setState({
      firstName: "",
      lastName: "",
      birthday: "",
      homePhone: "",
      cellPhone: "",
      email: "",
      address: "",

    });
    browserHistory.push("/")
  }

  //Delete contact
  deleteContact(contactId) {
    let uid = this.state.uid;
    console.log(uid)
    const contactRef = firebase.database().ref().child(String(uid));
    const specificContactRef = contactRef.child(String(contactId));
    console.log(specificContactRef)
    specificContactRef.remove();
  }

  //Handle viewing contact details
  handleDetails(contact, index){
    this.setState({
      contactToEdit: contact,
      contactInArray: index
    })
    browserHistory.push('/details')
  }

  // Edit contact
  editContact(contact, i) {
    this.setState({
      contactToEdit: contact,
      contactInArray: i
    })
    browserHistory.push("/edit")
  }

  handleEditSubmit(event){
    event.preventDefault();
    let uid = this.state.uid;
    let deleteContact = this.state.contactToEdit.id;
    const contactArray = this.state.contactValues;
    console.log(contactArray)
    let editThisContact = {
      first: document.getElementById('first').value,
      last: document.getElementById('last').value,
      birth: document.getElementById('birth').value,
      home: document.getElementById('home').value,
      cell: document.getElementById('cell').value,
      mail: document.getElementById('newEmail').value,
      address: document.getElementById('newAddress').value,
    };
console.log(editThisContact)
    const userRef = firebase.database().ref().child(uid);
    let key = userRef.push().key;
    let update = {};
    update[key]= editThisContact;
    let result = userRef.update(update);

    this.setState({
      contactValues: editThisContact
    })

    const contactRef = firebase.database().ref().child(String(uid));
    const specificContactRef = contactRef.child(String(deleteContact));
    specificContactRef.remove();
    this.clearState()

     browserHistory.push("/")
  }
  clearState(){
    this.setState({
      firstName: "",
      lastName: "",
      birthday: "",
      homePhone: "",
      cellPhone: "",
      email: "",
      address: "",
    });
  }

  //Log user out of Google
  logout() {
    browserHistory.push("/")
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  //Log user in using Google
  login() {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        uid: user.uid,
        user
      });
      const currentUser = firebase.auth().currentUser;
      if(user != null){
        const uid = user.uid;
        this.getUserContacts(uid);
      }
    });
  }


  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <MuiThemeProvider>
            <Avatar src={this.state.user.photoURL} />
            <AppBar
              showMenuIconButton={false}
              title={<span className='appHeader'>{this.state.user.displayName}'s Contacts</span>}
              iconElementRight={
                <RaisedButton label="Sign Out" onClick={this.logout} />}/>
          </MuiThemeProvider>
        ) : (
          <div>
          <MuiThemeProvider>
            <AppBar
              showMenuIconButton={false}
              title={<span className='appHeader'>Welcome to your personalized contacts!</span>}
            />
          </MuiThemeProvider>
          <div>
          <MuiThemeProvider>
          <Link to="/">
              <RaisedButton label="Sign In With Google" onClick={this.login} style={{margin:10}}/>
                </Link>
                  </MuiThemeProvider>
              </div>
              </div>
        )}

        <div className="mainContent">
          {React.cloneElement(this.props.children, {
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            contactValues: this.state.contactValues,
            deleteContact: this.deleteContact,
            editContact: this.editContact,
            user: this.state.user,
            uid: this.state.uid,
            contactToEdit: this.state.contactToEdit,
            handleEditSubmit: this.handleEditSubmit,
            handleEditChange: this.handleEditChange,
            handleDetails: this.handleDetails
          })}
        </div>
      </div>
    );
  }
}

export default App;
