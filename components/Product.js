import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Product.css';

class Product extends React.PureComponent {
    static propTypes={
      code:PropTypes.number,
      nameProduct:PropTypes.string,
      price:PropTypes.string,
      urlProduct:PropTypes.string,
      selectedProduct:PropTypes.func,
    }

    showInfo=()=>{
      this.props.selectedProduct(this.props.code);
    };

    buyProduct=()=>{

    };

  render(){
    return(<div className='Product'>
        <img src={this.props.urlProduct} title={this.props.nameProduct} className='ImgProduct'/>
        <p>{this.props.nameProduct}</p>
        <p className='priceProduct'>{this.props.price}</p>
        <button className='buttonProduct'><NavLink to={"/catalog/"+this.props.code} >Информация</NavLink ></button>
        <input type={'button'} defaultValue={'Купить'} className='buttonProduct' onClick={this.buyProduct}/>
    </div>)
    
  }
}

export default Product;