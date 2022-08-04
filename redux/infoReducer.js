import {add_for_backet, click_button_filter,delete_from_basket} from './explanForReducer';
import regeneratorRuntime from "regenerator-runtime";


const initState={
  info: [], 
  basket:[],
  filter:'',
  deleteProd:null,
  isDelete:false,
  cnts:{},
};

//получаем данные о продуктах в корзине
 const loadData = async () => {
  const response=await fetch('http://localhost:3000/productBasket');
  if ( !response.ok ) {
    console.log("fetch error " + response.status);
  }
  else {
    const data=await response.json();
    initState.basket=data.basket;
  }
};
loadData(); 

//получаем данные о всех продуктах в каталоге
 const loadProduct = async () =>{
  const response=await fetch('http://localhost:3000/products');
  if ( !response.ok ) {
    console.log("fetch error " + response.status);
  }
  else {
    const data=await response.json();
    initState.info=data;
  }
};
loadProduct(); 




function infoReducer(state=initState,action) {
  
  switch (action.type) {  
      //добавление нового товара в корзину
    case add_for_backet: {
      let c=[]
      let newState={...state,cnts:{...state.cnts,
        [action.isSelected]:action.addvalue
      }};
      state.info.forEach(el=>{
        if(el.code===action.isSelected){
           newState.basket.push(el);           
        }
      });
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
        //обновляем количество
        fetch('http://localhost:3000/counters',{method:'POST',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
          count:newState.cnts
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch( error => { alert('ошибка!\n'+error); } );
        return newState;
    }
      
    case click_button_filter: { 
        let newState={...state};
        newState.filter=action.word;
        return newState;
    }

    case delete_from_basket:{
      let newState={...state};
      let newp=state.basket.filter(el=>el.code!==action.isDelete)
      newState.basket=newp;
      newState.isDelete=true;
      fetch('http://localhost:3000/productBasket',{method:'PUT',headers: {
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
  