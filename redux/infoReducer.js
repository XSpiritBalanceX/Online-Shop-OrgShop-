import {add_for_backet, click_button_filter,
  delete_from_basket, load_data, add_count,
  update_count_item, delete_one_elem,} from './explanForReducer';
import regeneratorRuntime from "regenerator-runtime";


const initState={
  info: [], 
  basket:[],
  filter:'',
  cnts:{},
  price:null,
};


function infoReducer(state=initState,action) {
  
  switch (action.type) { 
   //загружаем данные о продуктах
    case load_data:{
      let newState={...state};
      newState.info=action.dataLoad;
      newState.basket=action.basketLoad;
      let allprice=0;
      newState.basket.forEach(el=>
        allprice+=parseFloat(el.price));
      newState.price=allprice.toFixed(2);
      return newState;
    }
    
    //добавление нового товара в корзину
    case add_for_backet: {
      let newState={...state};
      state.info.forEach(el=>{
        if(el.code===action.isSelected){        
           newState.basket.push(el);           
        }
      });
      let allprice=0;
      newState.basket.forEach(el=>
        allprice+=parseFloat(el.price));
      newState.price=allprice.toFixed(2);
        //обновляем корзину с продуктами на сервере
      fetch('http://localhost:3000/productBasket',{method:'POST',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
          basket:newState.basket
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch( error => { alert('ошибка!\n'+error); } ); 
        
        return newState;
    }
    //применяем фильтры с главной страницы  
    case click_button_filter: { 
        let newState={...state};
        newState.filter=action.word;
        return newState;
    }
   //удаляем товар из корзины
    case delete_from_basket:{
      let newState={...state};
      let newp=state.basket.filter(el=>el.code!==action.isDelete)
      newState.basket=newp;
      let allprice=0;
      newState.basket.forEach(el=>
        allprice+=parseFloat(el.price));
      newState.price=allprice.toFixed(2);
      fetch('http://localhost:3000/productBasket',{method:'POST',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
          basket:newState.basket,
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch( error => { alert('ошибка!\n'+error); } );
      return newState;
    }
//создаем счетчик количества товара в корзине
    case add_count:{
      let newState={...state};
      newState.cnts=action.cnts;

      return newState;
    }
//обновляем счетчик товара
    case update_count_item:{
      let newState={...state}
        newState.cnts={...state.cnts,
          [action.countId]:state.cnts[action.countId]+action.addValue
        };
      return newState;
    }
//удаляем один элемент из корзины при нажатии кнопки
    case delete_one_elem:{
      let newState={...state};
        let arrIndexDupl=[];
        state.basket.forEach((el,index)=>{
          if(el.code===action.codeElem){
            arrIndexDupl.push(index)
          }          
        });
        newState.basket.splice(arrIndexDupl[0],1);

        let allprice=0;
      newState.basket.forEach(el=>
        allprice+=parseFloat(el.price));
      newState.price=allprice.toFixed(2);
        fetch('http://localhost:3000/productBasket',{method:'POST',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
          basket:newState.basket,
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch( error => { alert('ошибка!\n'+error); } );

        return newState;
    }

    default:
      return state;
    }
}
  
  export default infoReducer;
  