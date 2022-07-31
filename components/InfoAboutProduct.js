import React from 'react';
import PropTypes from 'prop-types';


import './InfoAboutProduct.css';


class InfoAboutProduct extends React.PureComponent {
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
          
  render() {
   return (<div>InfoAboutProduct</div>)
  }

}
    
export default InfoAboutProduct;
    