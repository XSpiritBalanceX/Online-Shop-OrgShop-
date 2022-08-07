import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import {gotoFilter} from '../redux/explanForReducer';
import { NavLink } from 'react-router-dom';
import './styles/Page_Catalog.css';


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
    filterWord:PropTypes.string.isRequired
  }

  state={
    productArr:[], 
    buttFilter:false,
  }

  //при первом открытии страницы загружаем данные в state из Redux
  componentDidMount(){   
      this.setState({isLoad:true, 
        productArr:this.props.infoAboutProduct});
    
    //если были пременены фильты с главной страницы, выводим предупреждение при перезагрузке страницы
    if(this.props.filterWord!==''){
      window.addEventListener("beforeunload", this.onUnload);
    }    
  };
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload);
  }

  onUnload = (EO) => { 
    EO.preventDefault();
    EO.returnValue = '';
  } ;

  allCatalog=()=>{
    this.props.dispatch( gotoFilter('') );
  };

  

        
  render() {
    //если пользователь выбрал определенную категорию с главной страницы, то выводим отфильтрованные товары
    let newArr;
    if(this.props.filterWord!==''){
      newArr=this.state.productArr.filter(el=>el.type===this.props.filterWord);
    }
    else if(this.props.filterWord===''){
      newArr=this.state.productArr.slice();
    }
  
    return (<div>
        <input type={'button'} defaultValue='Показать весь каталог' 
          onClick={this.allCatalog} style={{display:this.props.filterWord!==''?'block':'none'}} className='buttAllCatalog'/>
          <button  className='buttAllCatalog' ><NavLink to={"/pages/"+'first'} >Постраничный просмотр товаров</NavLink ></button>
        <div>{newArr.map(el=>
      <Product key={el.code}
       code={el.code}
       nameProduct={el.nameProduct}
       price={el.price}
       urlProduct={el.urlProduct}
       />)}</div>
       </div>)
    
  }

}
const mapStateToProps = function (state) { 
  return {
    infoAboutProduct: state.infoProduct.info, 
    filterWord:state.infoProduct.filter,
  }; 
};

const Page_Catalog = connect(mapStateToProps)(intPage_Catalog);

export default Page_Catalog;
    