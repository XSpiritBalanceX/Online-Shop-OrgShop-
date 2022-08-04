import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductInBasket  from '../components/ProductInBasket';
import shortid from 'shortid';//генерация всегда нового key для продукта в корзине
import regeneratorRuntime from "regenerator-runtime";
import {deleteFromBasket} from '../redux/explanForReducer';

import './Page_Basket.css';

class intPage_Basket extends React.PureComponent {

  static propTypes={
     basketRedux:PropTypes.arrayOf(
      PropTypes.shape({
      code: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      nameProduct: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      typeScin: PropTypes.string.isRequired,
      urlProduct:PropTypes.string.isRequired,
      volume:PropTypes.string.isRequired,
    })),
    isDelete:PropTypes.bool.isRequired
  }
  
  state={
    data:[],
    isLoad:false,
  };

  //при обновлении страницы загружаем данные с сервера, чтобы пользователь не потерял данные
  componentDidMount(){
    if(this.props.basketRedux.length===0){
      this.getData();
    }
    else{
      this.setState({data:this.props.basketRedux, isLoad:true});
    }
  }

  getData=()=>{
    fetch('http://localhost:3000/productBasket')
    .then(response=>response.json())
    .then(data=>this.setState({data:data.basket, isLoad:true}))
    .catch(error => { alert('ошибка!\n'+error);}); 
  };

  deleteProduct=(code)=>{
    this.props.dispatch( deleteFromBasket(code) );
  };

  render(){
    let basketProduct;
    if(this.props.isDelete){
       basketProduct=this.props.basketRedux;
    }
    else{
      basketProduct=this.state.data.slice()
    }
    
    if (!this.state.isLoad){
      return (<div>Подождите, идет загрузка данных...</div>)
    }
    else if(this.state.data.length==0){
       return (<div className='emptyBasket'><p>Вы еще ничего не добавили в корзиную. Сделайте свою первую покупку!</p>
      <button className='goToCatalog'><NavLink to={"/catalog"} >Перейти в каталог</NavLink ></button></div>);
    }
    else{
      let currentSum=0;
      basketProduct.forEach(el=>
      currentSum+=parseFloat(el.price));

      //обновляем конечную цену в корзине при добавлении нового продукта
      fetch("http://localhost:3000/price", {method:'PUT',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }, 
        body:JSON.stringify({
          id: 1,
          price:currentSum.toFixed(2),
      })});
      let uniq=[];
      const countItems = basketProduct.reduce((acc, el) => {
        acc[el.code] = acc[el.code] ? acc[el.code] + 1 : 1;
        acc[el.code]===1?uniq.push(el):null;
        return acc;
      }, {});
     return ( <div>{uniq.map(el=>      
      <ProductInBasket 
        key={el.code}
        infoPr={el}
        cbDeleteProduct={this.deleteProduct}
         />)    
      }
            <div className='allPrice'><p>К оплате {currentSum.toFixed(2)} BYN</p>
            <input type={'button'} defaultValue='Оплатить' className='butForBuy' /></div>
            </div> 
       )
    };
  }
};

const mapStateToProps = function (state) {
  return { basketRedux: state.infoProduct.basket,
          isDelete:state.infoProduct.isDelete ,
        }; 
};

const Page_Basket = connect(mapStateToProps)(intPage_Basket);

export default Page_Basket;