import React from 'react';
import {connect} from 'react-redux';

import InfoAboutProduct from '../components/InfoAboutProduct';

const intCounter = props => {
    
   
   
    return <p>{props.basket} шт.</p>;
}
    
const mapStateToProps = function (state) {
  return { 
    basket: state.infoProduct.basket.length,
  }; 
};

const Counter = connect(mapStateToProps)(intCounter);

export default Counter;