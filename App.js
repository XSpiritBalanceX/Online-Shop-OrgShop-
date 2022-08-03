import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import infoReducer from "./redux/infoReducer";

let combinedReducer=combineReducers({
  infoProduct: infoReducer, 
});
let store=createStore(combinedReducer);

ReactDOM.render( 
  
  <BrowserRouter>
    <div>
    <Provider store={store}> 
      <PagesLinks />
      <PagesRouter />
      </Provider>
    </div>
  </BrowserRouter>
, document.getElementById('container') );
