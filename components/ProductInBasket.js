import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './ProductInBasket.css';


class intProductInBasket  extends React.PureComponent{
    //получены из родительского компонента
    static propTypes={
        infoPr:PropTypes.shape({
            code: PropTypes.number,
            nameProduct: PropTypes.string,
            price: PropTypes.string,
            urlProduct:PropTypes.string,
        }),
    };

    deleteProduct=()=>{

    };


  render(){
    
    return (<div className='contForItem'>
        <img src={this.props.infoPr.urlProduct} title={this.props.infoPr.nameProduct}/>
        <div className='nameProd'>{this.props.infoPr.nameProduct}</div>
        <div className='priceP'>{this.props.infoPr.price}</div>
        <div><input type={'button'} onClick={this.deleteProduct} defaultValue='Удалить' className='buttForDel'/></div>
    </div>)
  }
}

const mapStateToProps = function (state) {
    return { }; 
  };
  
const ProductInBasket  = connect(mapStateToProps)(intProductInBasket);
  
export default ProductInBasket ;