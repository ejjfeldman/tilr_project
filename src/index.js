import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactTable from './ContactTable';
import SigninBar from './SigninBar';
import ContactForm from './ContactForm';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
