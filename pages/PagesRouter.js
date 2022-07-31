import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page_Main from './Page_Main';
import Page_Catalog from './Page_Catalog';
import Page_About from './Page_About';
import Page_Contacts from './Page_Contacts';
import Page_Item from './Page_Item';
import Page_Basket from './Page_Basket';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div style={{position:'absolute', top: "15%"}}>
        <Routes>
        <Route path="/" element={<Page_Main/>} />
        <Route path="/catalog" element={<Page_Catalog/>} />
        <Route path="/catalog/:prodcode" element={<Page_Item/>} />
        <Route path="/about_shop" element={<Page_About/>} />
        <Route path="/contacts" element={<Page_Contacts/>} />  
        <Route path="/basket" element={<Page_Basket/>} />       
      </Routes>
      </div>
      
    );
    
  }

}
    
export default PagesRouter;
    