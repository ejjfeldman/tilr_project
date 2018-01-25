import React, { Component } from 'react';
import './App.css';
import firebase, { auth, provider } from "./firebase.js";

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Link, Redirect } from 'react-router';


const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const logInBtn = document.getElementById('logInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signOutBtn = document.getElementById('signOutBtn');


  


class SigninBar extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:true,
            user: null
        }

        this.authWithEmailPassword=this.authWithEmailPassword.bind(this);
        this.authenticateGoogleLogIn=this.authenticateGoogleLogIn.bind(this);
    
    }


    authenticateGoogleLogIn(){
      auth.signInWithRedirect(provider)
      .then((result, error)=>{
        if(error){
          console.log(error)
        }
        else{
          const user =result.user
          this.setState({
            user
          })
        }
      })
      console.log("athed with google")

  }

  authWithEmailPassword(event){
    event.preventDefault();
    console.table([{
              email: this.emailInput.value,
              password: this.passwordInput.value
            }])
    const email = this.emailInput.value;
    const pass = this.passwordInput.value;
 
    auth.signInWithEmailAndPassword(email, pass)
    .then((result) => {
      var token = result.credential.accessToken;
      const user = result.user;
      this.setState({
        user
      });
      console.log(token)
    });

  }
  render() {
    return (
      
      <div className="SigninBar">

      <button onClick={()=> { this.authenticateGoogleLogIn ()}}>Log In with Google</button>
      <form onSubmit={(event)=> { this.authWithEmailPassword(event)}} ref={ (form) => { this.loginForm}}>
      
        <input type="text" name="email" placeholder="User Email" ref={(input)=>{this.emailInput = input}}/><br/>
        <input type="password" name="password" placeholder="Password" ref={(input)=>{this.passwordInput = input}}/><br/>
        <input type="submit" value="Log In"></input>
   
      </form>
         
         
          {/* <MuiThemeProvider>

        <div>
            <form onSubmit={(event)=>{this.authWithEmailSubmit(event)}} ref={(form)=>{this.loginForm=form}}>
          <TextField type="text" id="userEmail" name="userEmail" floatingLabelText="User Email" ref={(input)=>{this.emailInput = input}}/><br/>
          <TextField type="password" id="userPassword" name="userPassword" floatingLabelText="Password" ref={(input)=>{this.passwordInput = input}}/><br/>
            
        <br />
        <FlatButton id="logInBtn" onClick={()=>{this.authenticateLogIn()}}>Log In</FlatButton>
        <Link to="create-user"><FlatButton id="signUpBtn">Sign Up</FlatButton></Link>
        <FlatButton id="signOutBtn">Sign Out</FlatButton>
        </form>
        </div>

    </MuiThemeProvider> */}
      </div>
    );
  }
}

export default SigninBar;
