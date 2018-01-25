import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactTable from './ContactTable';
import SigninBar from './SigninBar';
import ContactForm from './ContactForm';
import CreateUser from './CreateUser';
import EditForm from './EditForm';
import firebase, { auth, provider }  from './firebase.js';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router';



ReactDOM.render((<Router history={browserHistory}>
<Route path='/' component={App}>

<IndexRoute component={ContactTable}/>
<Route exact path="create" component={ContactForm}/>
<Route exact path="/create-user" component={CreateUser}/>
<Route exact path="signin" component={SigninBar}/>
<Route exact path="edit" component={EditForm}/>
</Route>
</Router>

), document.getElementById('root'));
registerServiceWorker();
