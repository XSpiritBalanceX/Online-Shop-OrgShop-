import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Page_Main from './Page_Main';
import Page_Catalog from './Page_Catalog';
import Page_About from './Page_About';
import Page_Contacts from './Page_Contacts';
import Page_Item from './Page_Item';
import Page_Basket from './Page_Basket';
import infoReducer from "../redux/infoReducer";

let combinedReducer=combineReducers({
  // редьюсер counterReducer отвечает за раздел state под именем counter
  infoProduct: infoReducer, 
  // + другие редьюсеры
});
let store=createStore(combinedReducer);


class PagesRouter extends React.Component {
          
  render() {

    return (
      <div style={{position:'absolute', top: "15%"}}>
      <Provider store={store}>
      <Routes>       
        <Route path="/" element={<Page_Main/>} />
        <Route path="/catalog" element={<Page_Catalog/>} />
        <Route path="/catalog/:prodcode" element={<Page_Item/>} />
        <Route path="/about_shop" element={<Page_About/>} />
        <Route path="/contacts" element={<Page_Contacts/>} />  
        <Route path="/basket" element={<Page_Basket/>} />             
      </Routes> 
      </Provider> 
      </div>
      
    );
    
  }

}
    
export default PagesRouter;
    