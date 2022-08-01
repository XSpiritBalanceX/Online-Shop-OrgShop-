import {getData} from '../components/getData.js';

import {add_for_backet} from './explanForReducer';

var productsArr=require('../components/products.json');
const initState={
    info: productsArr,
    basket:[],
  };
 /*  getData().then(data=>{initState.info=data},
    error=>{initState.error=error}); */
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер

  function infoReducer(state=initState,action) {
  
    switch (action.type) {
  
      case add_for_backet: {
        // хотелось бы просто увеличить state.cnt
        // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
        let newState={...state};
        state.info.forEach(el=>{
          if(el.code===action.isSelected){
           newState.basket.push(el); 
          }
        })
        
        console.log(newState)
        
        return newState;
      }
      
      case "buyProduct": {
        
        let newState={...state};
        newState.cnt--;
        
        return newState;
      }
  
      default:
        return state;
    }
  }
  
  export default infoReducer;
  