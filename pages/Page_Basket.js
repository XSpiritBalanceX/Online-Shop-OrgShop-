import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductInBasket  from '../components/ProductInBasket';
import regeneratorRuntime from "regenerator-runtime";
import {deleteFromBasket, addCount} from '../redux/explanForReducer';


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
    }))
  }

  
  deleteProduct=(code)=>{
    this.props.dispatch( deleteFromBasket(code) );
  };

  

  render(){
     if(this.props.basketRedux.length==0){
       return (<div className='emptyBasket'><p>Вы еще ничего не добавили в корзиную. Сделайте свою первую покупку!</p>
      <button className='goToCatalog'><NavLink to={"/catalog"} >Перейти в каталог</NavLink ></button></div>);
    }
    else{
      const uniqItem=[];
      const countItems = this.props.basketRedux.reduce((acc, el) => {
        acc[el.code] = acc[el.code] ? acc[el.code] + 1 : 1;
        acc[el.code]===1?uniqItem.push(el):null;
        return acc;
      }, {});

      this.props.dispatch( addCount(countItems) );
      
     return (<div>
            { uniqItem.map(el=>
              <ProductInBasket 
               key={el.code}
               infoPr={el}
               cbDeleteProduct={this.deleteProduct}
             />
              ) } 
            <div className='allPrice'><p>К оплате {this.props.price} BYN</p>
            <input type={'button'} defaultValue='Оплатить' className='butForBuy'/></div>
            </div> 
       )
    }
  }
};

const mapStateToProps = function (state) {
  return { basketRedux: state.infoProduct.basket,
        price:state.infoProduct.price}; 
};

const Page_Basket = connect(mapStateToProps)(intPage_Basket);

export default Page_Basket;