import React from 'react';

import './Page_Contacts.css';

class Page_Contacts extends React.PureComponent {

   state={
    error:null,
    isLoaded:false,
    resultArr:[],
   }

   componentDidMount(){
     fetch('https://my-json-server.typicode.com/XSpiritBalanceX/myjsonser/posts')
     .then(response=>response.json())
     .then(json=>{this.setState({isLoaded:true, resultArr:json})},
       error=>{this.setState({isLoaded:true, error})});
   };
          
  render() {

    const {error, isLoaded, resultArr} = this.state;
     console.log(resultArr);
     if(error){
      return <div>Ошибка: {error.message}</div>;
     }
    else if(!isLoaded){
      return (<div className='loading'>Подождите, идет загрузка данных...</div>)
    }
    else{
      return(
        <React.Fragment>{resultArr.map(element=>(
          <div key={element.code} className='floating'>
          <div className='floatP'>
            <p>{element.nameShop}</p>
          <p>{element.adress}</p>
          <p>Время работы: {element.time}</p>
          <p>Контактный номер: {element.phone}</p>
          </div>          
           <img src={element.urlShop} title='Фото магазина' className='imgShop' />  
           <div style={{clear: 'both'}}></div>         
          </div>
        ))}</React.Fragment>
      )
    }
    
    
  }

}
    
export default Page_Contacts;
    