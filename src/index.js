import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

// const store = createStore(reducer);
const store = createStore(reducer, compose(applyMiddleware(thunk)));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
