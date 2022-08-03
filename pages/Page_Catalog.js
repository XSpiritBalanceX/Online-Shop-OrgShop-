import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import regeneratorRuntime from "regenerator-runtime";

import Product from '../components/Product';

import './Page_Catalog.css';


class intPage_Catalog extends React.PureComponent {
  //пропсы получаем из Redux
  static propTypes={
    infoAboutProduct:PropTypes.arrayOf(
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
  }

  state={
    isLoad:false,
    productArr:[]
  }

  componentDidMount(){
    this.getProduct();
  };

  getProduct= async ()=>{
    const response=await fetch('http://localhost:3000/products');
    if ( !response.ok ) {
      console.log("fetch error " + response.status);
    }
    else {
      const data=await response.json();
      this.setState({isLoad:true, productArr:data});
    }
  };

        
  render() {
    if(!this.state.isLoad){
      return (<div>Подождите, идет загрузка данных...</div>)
    }
    else{
      return (<div>{this.state.productArr.map(el=>
      <Product key={el.code}
       code={el.code}
       nameProduct={el.nameProduct}
       price={el.price}
       urlProduct={el.urlProduct}
       />)}</div>)
    }
  }

}
const mapStateToProps = function (state) {
  return {
    infoAboutProduct: state.infoProduct.info, 
  }; 
};

const Page_Catalog = connect(mapStateToProps)(intPage_Catalog);

export default Page_Catalog;
    