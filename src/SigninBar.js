import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Link } from 'react-router';


const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const logInBtn = document.getElementById('logInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signOutBtn = document.getElementById('signOutBtn');


  


class SigninBar extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }

        this.authWithEmailSubmit=this.authWithEmailSubmit.bind(this);
        this.authenticate=this.authenticate.bind(this);
    
    }
    authWithEmailSubmit(event){
        console.table([{
            email: this.emailInput.value,
            password: this.passwordInput.value
          }])
          const email=this.emailInput.value;
          const password=this.passwordInput.value;
          const auth = firebase.auth();
          const promise = auth.signInWithEmailAndPassword(email, password);
          promise.catch(e=>console.log(e.message))
      }
      
      authenticate(){
        console.table([{
          email: this.emailInput.value,
          password: this.passwordInput.value
        }])
        const email=this.emailInput.value;
        const password=this.passwordInput.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e=>console.log(e.message))

      }
  render() {
    return (
      <div className="SigninBar">
    <MuiThemeProvider>

        <div>
            <form onSubmit={(event)=>{this.authWithEmailSubmit(event)}} ref={(form)=>{this.loginForm=form}}>
    <TextField type="text" id="userEmail" name="userEmail" floatingLabelText="User Email" ref={(input)=>{this.emailInput = input}}/><br/>
    <TextField type="password" id="userPassword" name="userPassword" floatingLabelText="Password" ref={(input)=>{this.passwordInput = input}}/><br/>
            
        <br />
        <FlatButton id="logInBtn" onClick={()=>{this.authenticate()}}>Log In</FlatButton>
        <Link to="create-user"><FlatButton id="signUpBtn">Sign Up</FlatButton></Link>
        <FlatButton id="signOutBtn">Sign Out</FlatButton>
        </form>
        </div>

    </MuiThemeProvider>
      </div>
    );
  }
}

export default SigninBar;
