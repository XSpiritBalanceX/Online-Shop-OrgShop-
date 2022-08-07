import React, { useState, useEffect } from 'react';

import './Page_About.css'

export default props=>{
  const [count, setCount] = useState(1);

  useEffect(
    ()=>{
      const timer1=setInterval(()=>setCount(prevCnt=>(prevCnt<25)?prevCnt+1:25),100);
      return ()=>{
        clearTimeout(timer1);
      };
    },
    [count]);

    //проверка правильности emil
    const [emailCurrValue, setEmail] = useState('');
    const [forEmail, setForEmail] = useState('');
    //проверка правильности номера телефона
    const [numberCurrValue, setNumber] = useState('');
    const [forNumber, setForNumber] = useState('');
    //проверка согласия с пользовательским соглашением
    const [agreeWiPo, setCheck] = useState(false);
    const [forPoliti, setForPolitic] = useState('');
    //показ модального окна
    const [show, setShow]=useState(false);
    
    //валидируем поля подписки на новости
  function handleClick() {
    let regForEmail=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let regForNumber=/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;
    let errorEmail;
    let errorNumber;
    let errorCheck;
    !regForEmail.test(emailCurrValue.toLowerCase())?errorEmail='Введите корректный Email':errorEmail='';
      setForEmail(errorEmail);
    
    !regForNumber.test(numberCurrValue)?errorNumber='Ошибка. Формат номера +375 29/44/33 XXXXXXX':
    errorNumber='';      
    setForNumber(errorNumber);
      
    !agreeWiPo?errorCheck='Вы должны дать согласие на обработку персональных данных':errorCheck='';
      setForPolitic(errorCheck);
      errorEmail==''&errorCheck==''&errorNumber==''?setShow(true):null;
      setTimeout(()=>{setShow(false);setEmail(''); setNumber('');setCheck(false)},2000);
      
  }

  //получаем данные о сутрудниках
  function getPersonal(){
    fetch('https://my-json-server.typicode.com/XSpiritBalanceX/datast/posts11')
    .then(response => response.json())
    .then(json => readData(json))
    .catch( error => { alert('ошибка!\n'+error); } );
    setShowData(true);
  }

  function readData(arr){
    let arrNew=[];
    arr.map(el=>arrNew.push(<div key={el.code} style={{textAlign:'center'}}>    
      <img src={el.urlStaff} style={{width:'10em', height:'10em', borderRadius:'20px 20px 20px 20px'}}/>
      <p>{el.name}</p>
      <p>Опыт в сфере красоты: {el.exper}</p>
      <p>Особенность: {el.feature}</p>
      <hr/>
      </div>));
    setDopData(arrNew);
  }

  const [dopData, setDopData] = useState('Загрузка данных...');
  //показ дополнительной информации о сотрудниках
  const [showDopData, setShowData] = useState(false);
  return (
    <React.Fragment>
       {showDopData?<div className='showStaff'><input type={'button'} defaultValue='&times;' className='buttonClose' onClick={()=>setShowData(false)}/>{dopData}</div>:null} 
      <div className='aboutShop'>
      <h3>О МАГАЗИНЕ</h3> <input type={'button'} defaultValue='сотрудники online магазина' className='onlineStaff' onClick={getPersonal}/>
    </div>
    <div className='firstContent'>
      <div className='firstImg'></div>
      <div className='firstInfo'><p>Наш магазин не только продает безопасную органическую косметику, 
        мы внимательны к каждому нашему клиенту, также мы хотим продлить красоту 
        и молодость Вашей кожи с помощью уходовой и декоративной косметики.  </p>
        <div className='firstStat'>
        <div ><p className='countInfo ' >8</p><p>Магазинов</p></div>
        <div className='orderPerDay'><p className='countInfo'>100+</p><p>Заказов в день</p></div>
        <div><p className='countInfo'>{count}</p><p>Сотрудников</p></div>
        </div>
        </div>
    </div>
    <div className='secondContent'><div className='firstInfo'><p>Магазин был основан в 2021 году и 
      с тех пор мы постоянно растем, чтобы каждая женщина могла  радовать себя 
      хорошими косметическими товарами. Наши консультанты постоянно проходят обучение, 
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
    <input className="text-field__input"  type="text"  name="email" placeholder="Введите Email" value={emailCurrValue} onChange={()=>setEmail(event.target.value)} onFocus={()=>setForEmail('')}/>
    <label className="text-field__label" htmlFor="email" >Email</label>
    <p className='error'>{forEmail}</p>
    </div>
    <div className="text-field text-field_floating-2">
    <input className="text-field__input" type="text"  name="number" placeholder="Введите номер телефона" value={numberCurrValue} onChange={()=>setNumber(event.target.value)} onFocus={()=>setForNumber('')}/>
    <label className="text-field__label" htmlFor="number">Номер телефона</label>
    <p className='error'>{forNumber}</p>
    </div>
    <div className='checkForRule'>
      <input type='checkbox' name='agreeForRule' checked={agreeWiPo} onChange={()=>setCheck(event.target.checked)}/>
      <label className="agrFoRu" htmlFor="agreeForRule">Я даю согласие на обработку персональных данных</label>
      <p className='error'>{forPoliti}</p>
    </div>
    </div>
    <input type={'button'} name='podpiska' defaultValue={'Подписаться'} className='buttonPodp' onClick={handleClick}/>
    </div>
    {show?<div className='modalWind'><p className='infoPod'>Информация о самых свежих новинках будет отправлена Вам на почту.</p></div>:null}
    </React.Fragment>
  );
  
}
