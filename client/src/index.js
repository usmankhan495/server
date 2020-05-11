import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css'
import thunk from 'redux-thunk'
import axios from 'axios'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers';
const store=createStore(reducers,applyMiddleware(thunk));
 
window.axios=axios;

ReactDOM.render(<Provider store={store}>
<App/>
</Provider>
,document.querySelector('#root'));


console.log("Stripe key is : "+process.env.REACT_APP_STRIPE_KEY);
console.log("ENV: "+process.env.NODE_ENV);
