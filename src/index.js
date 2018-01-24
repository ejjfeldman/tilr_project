import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactTable from './ContactTable';
import SigninBar from './SigninBar';
import ContactForm from './ContactForm';
import CreateUser from './CreateUser';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

var config = {
    apiKey: "AIzaSyCjVBw1Zd0ma76NGyQCpTSA-DARJpdtlgo",
    authDomain: "tilr-contacts.firebaseapp.com",
    databaseURL: "https://tilr-contacts.firebaseio.com",
    storageBucket: "tilr-contacts.appspot.com",
  };

firebase.initializeApp(config);

ReactDOM.render((<Router history={browserHistory}>
<Route path='/' component={App}>
<IndexRoute component={SigninBar}/>
<Route exact path="contacts" component={ContactTable}/>
<Route exact path="create" component={ContactForm}/>

<Route exact path="/create-user" component={CreateUser}/>

</Route>
</Router>

), document.getElementById('root'));
registerServiceWorker();
