import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/PagesLinks.css';

class PagesLinks extends React.Component {

    
  render() {

    return (
      <div >
        <img src='../images/logo.svg' className='logo'/>
        <div className='divPageLinks'>
        <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Главная</NavLink>
        <NavLink to="/catalog" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Каталог</NavLink>
        <NavLink to="/about_shop" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>О магазине</NavLink>
        <NavLink to="/contacts" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Контакты</NavLink>
        <NavLink to="/basket" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}><img src='../images/basket.svg'/></NavLink>
        </div>
        
      </div>
    );
    
  }

}

export default PagesLinks;
