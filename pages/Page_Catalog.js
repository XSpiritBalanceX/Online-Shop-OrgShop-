import React from 'react';

import Product from '../components/Product';
import './Page_Catalog.css';

import {getData} from '../components/getData.js';

class Page_Catalog extends React.PureComponent {
  state={
    error:null,
    isLoaded:false,
    products:[],
    isSelected:false,
  }

  componentDidMount(){
    getData().then(data=>{this.setState({isLoaded:true, products:data})},
    error=>{this.setState({isLoaded:true, error})})
    /* fetch('http://d.zaix.ru/uIYI.txt')
    .then(response=>response.json())
    .then(text=>{this.setState({isLoaded:true, products:text})},
    error=>{this.setState({isLoaded:true, error})}); */

  };

  showInfo=(code)=>{
   console.log(code)
  };
  
          
  render() {

    const {error, isLoaded, products} = this.state;

    var productItem=products.map(el=>
      <Product key={el.code}
       code={el.code}
       nameProduct={el.nameProduct}
       price={el.price}
       urlProduct={el.urlProduct}
       selectedProduct={this.showInfo}
       />);


    if(error){
      return <div>Ошибка: {error.message}</div>;
    }
    else if(!isLoaded){
      return (<div className='loading'>Подождите, идет загрузка данных...</div>);
    }
    else{
      return (<div className='contForProduct'>{productItem}</div>)
    }
    
  }

}
    
export default Page_Catalog;
    