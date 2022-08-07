import React from 'react';
import { Route, Routes } from 'react-router-dom';
import regeneratorRuntime from "regenerator-runtime";
import {connect} from 'react-redux';
import Page_Main from './Page_Main';
import Page_Catalog from './Page_Catalog';
import Page_About from './Page_About';
import Page_Contacts from './Page_Contacts';
import Page_Item from './Page_Item';
import Page_Basket from './Page_Basket';
import Page_PageByPage from './Page_PageByPage';
import {loadData} from '../redux/explanForReducer';
import Preloader from '../components/Preloader';
import Counter from '../components/Counter';


class intPagesRouter extends React.Component {
  state={
    isLoadData:false,
    isLoadBasket:false,
    productArr:[],
    productBasket:[],
  }
  componentDidMount(){
    this.getProduct();
    this.getBasket() 
  }
  getProduct= async ()=>{
        const response=await fetch('http://localhost:3000/products');
        if ( !response.ok ) {
          console.log("fetch error " + response.status);
        }
        else {
          const data=await response.json();
          this.setState({isLoadData:true, productArr:data});
        }
        
  };
  getBasket=async()=>{
    const response=await fetch('http://localhost:3000/productBasket');
        if ( !response.ok ) {
          console.log("fetch error " + response.status);
        }
        else {
          const data=await response.json();
          this.setState({isLoadBasket:true, productBasket:data.basket});
        }
  }
  render() {
    if(!this.state.isLoadData || !this.state.isLoadBasket){
      return(<Preloader />)
    }else{
      this.props.dispatch( loadData(this.state.productArr, this.state.productBasket) );
      return (
      <React.Fragment>
        <div style={{position:'absolute', right:'3%',top:'2%', fontSize:'15px', color:'#ebc642'}}><Counter/>  </div>
        
      <div style={{position:'absolute', top: "15%"}}> 
      <Routes> 
        <Route path="/" element={<Page_Main/>} />
        <Route path="/catalog" element={<Page_Catalog/>} />
        <Route path="/pages/:page" element={<Page_PageByPage/>} />
        <Route path="/catalog/:prodcode" element={<Page_Item/>} />
        <Route path="/about_shop" element={<Page_About/>} />
        <Route path="/contacts" element={<Page_Contacts/>} />
        <Route path="/basket" element={<Page_Basket/>} />             
      </Routes> 
      </div>
        </React.Fragment>
      
    );
    }
    
    
  }

}
const mapStateToProps = function (state) {
  return { }; 
};

const PagesRouter = connect(mapStateToProps)(intPagesRouter);
 
export default PagesRouter;
    