import React, { useState} from 'react';
import {useParams} from "react-router-dom";

import InfoAboutProduct from '../components/InfoAboutProduct';
import {getData} from '../components/getData.js';


// react-router v6 предоставляет возможности доступа к параметрам из УРЛа только через хук useParams,
// т.е. только для функциональных компонентов

const Page_Item = props => {
    
    const params = useParams();
    console.log(params);
    // раз написано <Route path="/client/:clid" element={<Page_Client/>} />
    // значит Page_Client получит то что в УРЛе после /client/ от хука useParams под именем clid в виде строки
    
    let clientId=parseInt(params.prodcode);
    
    /* let clientData=appData.clientsArr.find( c => c.id==clientId ); */

    const [currentData, setData] = useState(null);
    const [error, setError] = useState(null);
    var t;
    getData().then(data => {
          console.log(data.find(c=>c.code==clientId?t=c:t=null));
    })
    /* getData().then(data=>{setData(data)},
    error=>{setError(error)}); */
    console.log(t)

    return (

      
      <InfoAboutProduct
        /* info={clientData} */
      />
    );
    
}
    
export default Page_Item;