import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {addForBascet} from '../redux/explanForReducer';

import './Product.css';

class intProduct extends React.PureComponent {
  //эти пропсы получены из Page_Catalog
    static propTypes={
        code: PropTypes.number.isRequired,
        nameProduct: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        urlProduct:PropTypes.string.isRequired,
    };

    buyProduct=()=>{      
      this.props.dispatch( addForBascet(this.props.code) );      
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
};

const mapStateToProps = function (state) {
  return { }; 
};

const Product = connect(mapStateToProps)(intProduct);

export default Product;