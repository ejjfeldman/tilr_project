import React, { Component } from "react";
import "./App.css";
import ContactTable from "./ContactTable";
import ContactForm from "./ContactForm";
import SigninBar from "./SigninBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import EditForm from './EditForm';
import { browserHistory, Link } from "react-router";
import firebase, { auth, provider } from "./firebase.js";

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
      user: null,
      uid: '',
      contactToEdit: {}
      // isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.contactSelect = this.contactSelect.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.getUserContacts = this.getUserContacts.bind(this);
    this.saveFields = this.saveFields.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);

  }

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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log("here");
    console.log({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    console.log({ [event.target.name]: event.target.value });
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
      showForm: false
    });
    console.log(this.state.uid)
    browserHistory.push("/")
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
    let uid = this.state.uid;
    const contactRef = firebase.database().ref().child(String(uid));
    const specificContactRef = contactRef.child(String(contactId));
    specificContactRef.remove();
  }

  editContact(contact) {
    this.setState({
      contactToEdit: contact
    })
    console.log(this.state.contactToEdit)
    // let uid = this.state.uid;
    // console.log({ [event.target.name]: event.target.value });
    // const contactRef = firebase.database().ref().child(String(uid));
    // const specificContactRef = contactRef.child(String(contactId));
    // console.log(contactRef);
    browserHistory.push("/edit")
  }

  handleEditSubmit(event){
    console.log({[event.target.name]: event.target.value })
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
      showForm: false
    });
    console.log(this.state.uid)
    browserHistory.push("/")

  }
  //handling user login/out
  handleUserChange(event) {}

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider)
    .then((result) => {
      // var token = result.credential.accessToken;
      const user = result.user;
      this.setState({
        uid: user.uid,
        user
      });
      // console.log(token)
      console.log(this.state.uid)
      const currentUser = firebase.auth().currentUser;
      console.log(currentUser);
      if(user != null){
        // const name = user.displayName;
        // const email = user.email;
        // const photoUrl = user.photoURL;
        const uid = user.uid;
        // console.log(currentUser, name, email, photoUrl, uid)
        
        this.getUserContacts(uid);
      }
    
    });
    
  }

  //fix!!!!!
  getUserContacts(uid){
        let user = this.state.user;
        console.log(uid);
        const userRef = firebase.database().ref().child(String(uid));
        // userRef.on('value', snap=>console.log(snap.val()));
        userRef.on('value', snap=>{
          let contactValues = snap.val();
          console.log(contactValues)
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

  saveFields(id){
console.log("save")
console.log(id)
let editedContact = id
console.log(editedContact)


  }


  render() {
    return (
      <div className="App">

         {/* sign in/sign out bar  */}
        {this.state.user ? (
          <MuiThemeProvider>
            <AppBar
              showMenuIconButton={false}
              title={<span>{this.state.user.displayName}'s Contacts</span>}
              iconElementRight={
                <RaisedButton label="Sign Out" onClick={this.logout} />
              }
            />
          </MuiThemeProvider>
        ) : (
          <MuiThemeProvider>
            <AppBar
              showMenuIconButton={false}
              title={<span>Sign In to View Your Contacts</span>}
              iconElementRight={
                <Link to="/">
                  <RaisedButton label="Sign In" onClick={this.login} />
                </Link>
              }
            />
          </MuiThemeProvider>
        )}



        <div className="mainContent">
          {React.cloneElement(this.props.children, {
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            contactValues: this.state.contactValues,
            showForm: this.state.showForm,
            changeForm: this.changeForm,
            contactSelect: this.state.contactSelect,
            deleteContact: this.deleteContact,
            editContact: this.editContact,
            user: this.state.user,
            isAuthenticated: this.state.isAuthenticated,
            uid: this.state.uid,
            saveFields: this.saveFields,
            contactToEdit: this.state.contactToEdit,
            handleEditSubmit: this.handleEditSubmit
            // handleEditChange: this.handleEditChange
          })}
        </div>
      </div>
    );
  }
}

export default App;
