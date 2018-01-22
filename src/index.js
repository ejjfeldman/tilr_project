import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactTable from './ContactTable';
import SigninBar from './SigninBar';
import ContactForm from './ContactForm';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyCjVBw1Zd0ma76NGyQCpTSA-DARJpdtlgo",
    authDomain: "tilr-contacts.firebaseapp.com",
    databaseURL: "https://tilr-contacts.firebaseio.com",
    storageBucket: "tilr-contacts.appspot.com",
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
