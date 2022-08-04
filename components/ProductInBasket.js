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
        cbDeleteProduct:PropTypes.func.isRequired,
        
    };
    state={
      dataCount:{}
    }

    componentDidMount(){
      
      if(/* Object.keys(this.props.counters) */this.props.counters.length===0){
        this.getData();
      }
      else{
        this.setState({dataCount:this.props.counters});
      }
    }
  
    getData=()=>{
      fetch('http://localhost:3000/counters')
      .then(response=>response.json())
      .then(data=>this.setState({dataCount:data.count} ))
      .catch(error => { alert('ошибка!\n'+error);}); 
    };

    deleteProduct=()=>{
      this.props.cbDeleteProduct(this.props.infoPr.code)
    };


  render(){
    let counterValue=this.state.dataCount[this.props.infoPr.code];
    
    return (<div className='contForItem'>
        <img src={this.props.infoPr.urlProduct} title={this.props.infoPr.nameProduct}/>
        <div className='nameProd'>{this.props.infoPr.nameProduct}</div>
        <div className='priceP'>{this.props.infoPr.price}</div>
        <div>
          <input type={'button'} defaultValue='-'/>
          <input type={'text'} defaultValue={counterValue}/>
          <input type={'button'} defaultValue='+'/>
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