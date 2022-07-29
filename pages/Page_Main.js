import React from 'react';
import { NavLink } from 'react-router-dom';

import './Page_Main.css';

class Page_Main extends React.PureComponent {

   /* getTest=()=>{
    fetch('https://my-json-server.typicode.com/XSpiritBalanceX/myjsonser/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch( error => { alert('ошибка!\n'+error); } );
  }  */

  goToDirrect=()=>{
    
  };
         
  render() {

    return (
      <div className='contanerMain'>
        <div className='leftInfo'>
        <h1>Косметика с любовью к твоей коже</h1>
        <p style={{marginTop:'30px'}}> Мы заботимся о красоте и здоровье любого типа кожи. 
        Здесь ты найдешь только органическую уходовую косметику, без опасных веществ в своем составе, а также премиальную декоративную косметику.</p>
        <button className='buttonNewProduct' style={{marginTop:'30px'}} >
         <NavLink to="/catalog" >Посмотреть новинки</NavLink >
        </button>
      </div>
      <div className='rightInfo' >
        <div className='contForImg firstFon' data-title="Для перехода кликните на стрелку">
         <img src='./images/fon1.png' style={{height:'370px'}} className='imgFon'/> 
         <p >Защита от солнца</p>
         <button className='buttFon'><NavLink to="/catalog" ><img src='./images/arrow.svg' className='arrowForImage' style={{right:'-3px'}}/></NavLink ></button> 
        </div>
        <div className='maskAndSerym'>
          <div className='contForImg' data-title="Для перехода кликните на стрелку">
         <img src='./images/fon2.png' style={{height:'100px'}} className='imgFon'/> 
         <p>Маски</p>
         <button className='buttFon'><NavLink to="/catalog" ><img src='./images/arrow.svg' className='arrowForImage'/></NavLink ></button> 
        </div>
        <div className='contForImg' data-title="Для перехода кликните на стрелку">
         <img src='./images/fon3.png' style={{height:'195px'}} className='imgFon'/> 
         <p>Сыворотки</p>
         <button className='buttFon'><NavLink to="/catalog" ><img src='./images/arrow.svg' className='arrowForImage' /></NavLink ></button>
        </div>
        </div>
        
      </div>
      </div>
      
    );
    
  }

}
    
export default Page_Main;
    