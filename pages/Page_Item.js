import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';

import InfoAboutProduct from '../components/InfoAboutProduct';

const intPage_Item = props => {
    
    const params = useParams();

    let productCode=parseInt(params.prodcode);
    
    let productData=props.infoAboutProduct.find( el => el.code==productCode ); 
   
    return <InfoAboutProduct 
    info={productData}/>;
}
    
const mapStateToProps = function (state) {
  return { 
    infoAboutProduct: state.infoProduct.info,
  }; 
};

const Page_Item = connect(mapStateToProps)(intPage_Item);

export default Page_Item;