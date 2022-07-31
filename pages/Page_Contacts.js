import React from 'react';

import './Page_Contacts.css';

class Page_Contacts extends React.PureComponent {

   state={
    error:null,
    isLoaded:false,
    dopArr:[],
    resultArr:[],
    currentValue:'',
   }

   componentDidMount(){
     fetch('https://my-json-server.typicode.com/XSpiritBalanceX/contactsShop/posts')
     .then(response=>response.json())
     .then(json=>{this.setState({isLoaded:true, resultArr:json, dopArr:json})},
       error=>{this.setState({isLoaded:true, error})});
   };

   sortSityShop=(EO)=>{
     this.setState({currentValue:EO.target.value}, this.createNewShop)
   };

   createNewShop=()=>{
     var newArrShop;
     if(!this.state.currentValue){
      newArrShop=this.state.dopArr.slice();
     }
     else{
      newArrShop=[];
      this.state.dopArr.forEach(el=>{
        if(el.city.toLowerCase().includes(this.state.currentValue.toLowerCase())){
          newArrShop.push(el);        
        }
      })
     }
     this.setState({resultArr:newArrShop});
   };
          
  render() {
    const {error, isLoaded, resultArr} = this.state;
     
     if(error){
      return <div>Ошибка: {error.message}</div>;
     }
    else if(!isLoaded){
      return (<div className='loading'>Подождите, идет загрузка данных...</div>)
    }
    else{
      return(
        <React.Fragment>
          <div className='divSearch'>
           <label htmlFor='searchInput' className='labelForSearch'> Для поиска магазина введите Ваш город</label>
          <input type={'text'} value={this.state.currentValue} name='searchInput' onChange={this.sortSityShop} className='searchI'/> 
          </div>          
          {resultArr.map(element=>(
          <div key={element.code} className='floating'>
          <div className='floatP'>
            <p>{element.nameShop}</p>
          <p>{element.city} {element.adress}</p>
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
    