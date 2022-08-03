import {add_for_backet} from './explanForReducer';
import regeneratorRuntime from "regenerator-runtime";


const initState={
  info: [], 
  basket:[],
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
        let newState={...state};
        state.info.forEach(el=>{
          if(el.code===action.isSelected){
           newState.basket.push(el); 
          }
        });
        //обновляем корзину с продуктами на сервере
        fetch('http://localhost:3000/productBasket',{method:'POST',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }, body:JSON.stringify({
          basket:newState.basket,
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch( error => { alert('ошибка!\n'+error); } ); 
        return newState;
      }
      
      case 'fvf': {
        
        let newState={...state};
        newState.price=action.price;
        
        return newState;
      }
  
      default:
        return state;
    }
}
  
  export default infoReducer;
  