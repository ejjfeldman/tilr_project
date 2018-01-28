import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import EditForm from './EditForm';
import registerServiceWorker from './registerServiceWorker';
import DetailPage from './DetailPage';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';



ReactDOM.render((<Router history={browserHistory}>
<Route path='/' component={App}>

<IndexRoute component={ContactTable}/>
<Route exact path="create" component={ContactForm}/>
<Route exact path="edit" component={EditForm}/>
<Route exact path='/details' component={DetailPage}/>
</Route>
</Router>

), document.getElementById('root'));
registerServiceWorker();
