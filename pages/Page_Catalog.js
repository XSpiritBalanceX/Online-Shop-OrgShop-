import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
        
  render() {
    return (<div>{this.props.infoAboutProduct.map(el=>
      <Product key={el.code}
       code={el.code}
       nameProduct={el.nameProduct}
       price={el.price}
       urlProduct={el.urlProduct}
       />)}</div>)
   
  }

}
const mapStateToProps = function (state) {
  return {
    infoAboutProduct: state.infoProduct.info, 
  }; 
};

const Page_Catalog = connect(mapStateToProps)(intPage_Catalog);

export default Page_Catalog;
    