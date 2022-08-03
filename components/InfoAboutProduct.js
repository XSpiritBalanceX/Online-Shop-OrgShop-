import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addForBascet} from '../redux/explanForReducer';

import './InfoAboutProduct.css';


class intInfoAboutProduct extends React.PureComponent {
    //пропсы из Page_Item
    static propTypes={
        info:PropTypes.shape({
            code: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            nameProduct: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            purpose: PropTypes.string.isRequired,
            typeScin: PropTypes.string.isRequired,
            urlProduct:PropTypes.string.isRequired,
            volume:PropTypes.string.isRequired,
          }),
    }

    buyThisProduct=()=>{
      this.props.dispatch( addForBascet(this.props.info.code) );
    }
          
  render() {
   return (<div className='contanerForInfo'>
    <img className='imgProd' src={this.props.info.urlProduct} title={this.props.info.nameProduct}/>
   <div className='infoProd'><h3>{this.props.info.nameProduct}</h3>
   <p >{this.props.info.description}</p>
   <p className='priceProd'>Цена: {this.props.info.price}</p>   
   <p className='dopInfo'>Тип кожи: {this.props.info.typeScin}</p>
   <p className='dopInfo'>Назначение: {this.props.info.purpose}</p>
   <p className='dopInfo'>Объем: {this.props.info.volume}</p>
   <input className='buttonBuy' type='button' defaultValue='Добавить в корзину' onClick={this.buyThisProduct}/></div>
   </div>
   )
  }

}
const mapStateToProps = function (state) {
    return { }; 
  };
  
const InfoAboutProduct = connect(mapStateToProps)(intInfoAboutProduct);
   
export default InfoAboutProduct;
    