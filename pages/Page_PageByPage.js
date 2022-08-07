import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Product from '../components/Product';
import './Page_PageByPage.css';

const intPage_PageByPage = props => {
    
    const params = useParams();
    
    let pageCount=params.page;

    var productData;
    pageCount=='first'?productData=props.infoAboutProduct.slice(0,9):null;
    pageCount=='second'?productData=props.infoAboutProduct.slice(10,19):null;
    pageCount=='third'?productData=props.infoAboutProduct.slice(20,29):null;
    pageCount=='fourth'?productData=props.infoAboutProduct.slice(30,39):null;
    pageCount=='fifth'?productData=props.infoAboutProduct.slice(40,49):null;
    pageCount=='sixth'?productData=props.infoAboutProduct.slice(50,59):null;
    pageCount=='seventh'?productData=props.infoAboutProduct.slice(60):null;
    pageCount=='catalog'?productData=props.infoAboutProduct.slice(0):null;
   
    return (<React.Fragment>
        <button className='pages'><NavLink to={"/catalog"} >Вернуться к полному списку</NavLink ></button>
        <div>{productData.map(el=>
        <Product key={el.code}
         code={el.code}
         nameProduct={el.nameProduct}
         price={el.price}
         urlProduct={el.urlProduct}
         />)}</div>
         <div className='divPages'>
            <button className='pagesItem' ><NavLink to={"/pages/"+'first'} >1</NavLink ></button>
            <button className='pagesItem' ><NavLink to={"/pages/"+'second'} >2</NavLink ></button>
            <button className='pagesItem' ><NavLink to={"/pages/"+'third'} >3</NavLink ></button>
            <button className='pagesItem' ><NavLink to={"/pages/"+'fourth'} >4</NavLink ></button>
            <button className='pagesItem' ><NavLink to={"/pages/"+'fifth'} >5</NavLink ></button>
            <button className='pagesItem' ><NavLink to={"/pages/"+'sixth'} >6</NavLink ></button>
            <button className='pagesItem' ><NavLink to={"/pages/"+'seventh'} >7</NavLink ></button>
         </div>
    </React.Fragment>);
}
    
const mapStateToProps = function (state) {
  return { 
    infoAboutProduct: state.infoProduct.info,
  }; 
};

const Page_PageByPage = connect(mapStateToProps)(intPage_PageByPage);

export default Page_PageByPage;