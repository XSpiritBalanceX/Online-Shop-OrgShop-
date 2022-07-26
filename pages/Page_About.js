import React, { useState, useEffect, useRef } from 'react';

import './Page_About.css'

export default props=>{
  const [count, setCount] = useState(0);

  useEffect(
    ()=>{
      const timer1=setInterval(()=>setCount(prevCnt=>(prevCnt<10)?prevCnt+1:10),100);
      return ()=>{
        clearTimeout(timer1);
      };
    },
    [count]);

    const [emailCurrValue, setEmail] = useState('');
    const [numberCurrValue, setNumber] = useState('');
    const [agreeWiPo, setCheck] = useState(false);
    const [forEmail, setForEmail] = useState('');
  function handleClick() {
    let regForEmail=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if(!regForEmail.test(emailCurrValue.toLowerCase())){
      setForEmail('Введите корректный Email');
    }
    
    console.log(forEmail)
  }

  return (
    <React.Fragment>
      <div className='aboutShop'>
      <h3>О МАГАЗИНЕ</h3>
    </div>
    <div className='firstContent'>
      <div className='firstImg'></div>
      <div className='firstInfo'><p>Наш магазин не только продает безопасную органическую косметику, 
        мы внимательны к каждому нашему клиенту, также мы хотим продлить красоту 
        и молодость Вашей кожи.  </p>
        <div className='firstStat'>
        <div ><p className='countInfo ' >{count}</p><p>Магазинов</p></div>
        <div className='orderPerDay'><p className='countInfo'>100+</p><p>Заказов в день</p></div>
        <div><p className='countInfo'>25</p><p>Сотрудников</p></div>
        </div>
        </div>
    </div>
    <div className='secondContent'><div className='firstInfo'><p>Магазин был основан в 2021 году и 
      с тех пор мы постоянно растем, чтобы каждая женщина могла  радовать себя 
      органической косметикой. Наши консультанты постоянно проходят обучение, 
      чтобы ты могла получить профессиональный совет в уходе за своей кожей.   </p>
        <div className='firstStat secStat'>
        <div className='moreInfo' data-title="Для большей информации перейдите в каталог"><p className='countInfo'>20</p><p>Брендов</p></div>
        <div className='orderPerDay'><p className='countInfo'>1000+</p><p>Улыбок женщин</p></div>
        </div>
        </div>
        <div className='secImg'></div>
        <div className='thirImg'></div></div>
        <div className='podpiska'>
        <div className='aboutPodp '>
      <h3>ОСТАВАЙСЯ В КУСРЕ ПОСЛЕДНИХ НОВОСТЕЙ</h3>
    </div>
    <div className='inputAll'>
    <div className="text-field text-field_floating-2">      
    <input className="text-field__input"  type="text"  name="email" placeholder="Введите Email" value={emailCurrValue} onChange={()=>setEmail(event.target.value)}/>
    <label className="text-field__label" htmlFor="email" >Email</label>
    <span className='error'>{forEmail}</span>
    </div>
    <div className="text-field text-field_floating-2">
    <input className="text-field__input" type="text"  name="number" placeholder="Введите номер телефона" value={numberCurrValue} onChange={()=>setNumber(event.target.value)}/>
    <label className="text-field__label" htmlFor="number">Номер телефона</label>
    <span className='error'>{forEmail}</span>
    </div>
    <div className='checkForRule'>
      <input type='checkbox' name='agreeForRule' checked={agreeWiPo} onChange={()=>setCheck(event.target.value)}/>
      <label className="agrFoRu" htmlFor="agreeForRule">Я даю согласие на обработку персональных данных</label>
      <span className='error'>{forEmail}</span>
    </div>
    </div>
    <input type={'button'} name='podpiska' defaultValue={'Подписаться'} className='buttonPodp' onClick={handleClick}/>
    </div>
    </React.Fragment>
  );
  
}

/* class Page_About extends React.PureComponent {
   
  render() {
    
    return (
      <React.Fragment>
        <div className='aboutShop'>
        <h3>О МАГАЗИНЕ</h3>
      </div>
      <div className='firstContent'>
        <div className='firstImg'></div>
        <div className='firstInfo'><p>Наш магазин не только продает безопасную органическую косметику, 
          мы внимательны к каждому нашему клиенту, также мы хотим продлить красоту 
          и молодость Вашей кожи.  </p>
          <div className='firstStat'>
          <div><p className='countInfo' >10</p><p>Магазинов</p></div>
          <div><p className='countInfo'>100+</p><p>Заказов в день</p></div>
          <div><p className='countInfo'>25</p><p>Сотрудников</p></div>
          </div>
          </div>
      </div>
      <div className='secondContent'><div className='firstInfo'><p>Магазин был основан в 2021 году и 
        с тех пор мы постоянно растем, чтобы каждая женщина могла  радовать себя 
        органической косметикой. Наши консультанты постоянно проходят обучение, 
        чтобы ты могла получить профессиональный совет в уходе за своей кожей.   </p>
          <div className='firstStat secStat'>
          <div><p className='countInfo'>20</p><p>Брендов</p></div>
          <div><p className='countInfo'>1000+</p><p>Улыбок женщин</p></div>
          </div>
          </div>
          <div className='secImg'></div>
          <div className='thirImg'></div></div>
          <div className='podpiska'>
          <div className='aboutPodp '>
        <h3>ОСТАВАЙСЯ В КУСРЕ ПОСЛЕДНИХ НОВОСТЕЙ</h3>
      </div>
      <div className='inputAll'>
      <div className="text-field text-field_floating-2">
      <input className="text-field__input" type="email"  name="email" placeholder="alexander@itchief.ru"/>
      <label className="text-field__label" htmlFor="email">Email</label>
      </div>
      <div className="text-field text-field_floating-2">
      <input className="text-field__input" type="email"  name="number" placeholder="alexander@itchief.ru"/>
      <label className="text-field__label" htmlFor="number">Номер телефона</label>
      </div>
      <div className='checkForRule'>
        <input type='checkbox' name='agreeForRule'/>
        <label className="agrFoRu" htmlFor="agreeForRule">Я даю согласие на обработку персональных данных</label>
      </div>
      </div>
      </div>
      </React.Fragment>
    );
    
  }

}
    
export default Page_About; */