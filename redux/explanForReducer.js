const add_for_backet='add_for_backet';
const add_price='add_price';

//добавляем товар в корзину
const addForBascet=function(code){
    return {
        type:add_for_backet,
        isSelected:code
    }
};
const addPrice=function(pr){
    return{
        type:add_price,
        price:pr
    }
}

export {addForBascet, add_for_backet,
  }