import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductInBasket  from '../components/ProductInBasket';
import shortid from 'shortid';//генерация всегда нового key для продукта в корзине
import regeneratorRuntime from "regenerator-runtime";

import './Page_Basket.css';

class intPage_Basket extends React.PureComponent {
  
  state={
    data:[],
    isLoad:false,
  }
  componentDidMount(){
    this.getData();
  }
  getData=()=>{
    fetch('http://localhost:3000/productBasket')
    .then(response=>response.json())
    .then(data=>this.setState({data:data.basket, isLoad:true}))
    .catch(error => { alert('ошибка!\n'+error);}); 
  }

  render(){
    if (!this.state.isLoad){
      return (<div>Подождите, идет загрузка данных</div>)
    }
    else if(this.state.data.length==0){
       return (<div className='emptyBasket'><p>Вы еще ничего не добавили в корзиную. Сделайте свою первую покупку!</p>
      <button className='goToCatalog'><NavLink to={"/catalog"} >Перейти в каталог</NavLink ></button></div>);
    }
    else{
      let currentSum=0;
      this.state.data.forEach(el=>
      currentSum+=parseFloat(el.price));

      //обновляем конечную цену в корзине при добавлении нового продукта
      fetch("http://localhost:3000/price", {method:'PUT',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body:JSON.stringify({
        id: 1,
        price:currentSum.toFixed(2),
      })});

     return ( <div>{this.state.data.map(el=>
            <ProductInBasket 
            key={shortid.generate()}
            infoPr={el}/>)}
       <div className='allPrice'><p>К оплате {currentSum.toFixed(2)} BYN</p>
       <input type={'button'} defaultValue='Оплатить' className='butForBuy' /></div>
       </div> 
       )
    };
  }
};

const mapStateToProps = function (state) {
  return {  }; 
};

const Page_Basket = connect(mapStateToProps)(intPage_Basket);

export default Page_Basket;