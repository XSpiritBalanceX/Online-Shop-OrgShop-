import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './ProductInBasket.css';
import {ubdateCount, addForBascet, deleteOneElement} from '../redux/explanForReducer';


class intProductInBasket  extends React.PureComponent{
    //получены из родительского компонента
    static propTypes={
        infoPr:PropTypes.shape({
            code: PropTypes.number,
            nameProduct: PropTypes.string,
            price: PropTypes.string,
            urlProduct:PropTypes.string,
        }),
        cbDeleteProduct:PropTypes.func.isRequired,
        
    };

    deleteProduct=()=>{
      this.props.cbDeleteProduct(this.props.infoPr.code)
    };

    incCounter=()=>{
      this.props.dispatch( ubdateCount(this.props.infoPr.code,1) );
      this.props.dispatch( addForBascet(this.props.infoPr.code) );   
    };

    decCounter=()=>{
      this.props.dispatch( ubdateCount(this.props.infoPr.code,-1) );
      this.props.dispatch( deleteOneElement(this.props.infoPr.code) );
    };


  render(){
    return (<div className='contForItem'>
        <img src={this.props.infoPr.urlProduct} title={this.props.infoPr.nameProduct}/>
        <div className='nameProd'>{this.props.infoPr.nameProduct}</div>
        <div className='priceP'>{this.props.infoPr.price}</div>
        <div className='counter'>
          <input  type={'button'} defaultValue='-' onClick={this.decCounter} disabled={this.props.counters[this.props.infoPr.code]===1?true:false}/>
          <p className='count'>{this.props.counters[this.props.infoPr.code]}</p>
          <input  type={'button'} defaultValue='+' onClick={this.incCounter}/>
        </div>
        <div><input type={'button'} onClick={this.deleteProduct} defaultValue='Удалить' className='buttForDel'/></div>
    </div>)
  }
}

const mapStateToProps = function (state) {
    return { counters: state.infoProduct.cnts}; 
  };
  
const ProductInBasket  = connect(mapStateToProps)(intProductInBasket);
  
export default ProductInBasket ;