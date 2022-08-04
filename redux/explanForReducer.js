const add_for_backet='add_for_backet';
const click_button_filter='click_button_filter';
const delete_from_basket='delete_from_basket';

//добавляем товар в корзину
const addForBascet=function(code,value){
    return {
        type:add_for_backet,
        isSelected:code,
        addvalue:value,
    }
};
//переход с главной страницы по кнопкам в каталог
const gotoFilter=function(w){
    return{
        type:click_button_filter,
        word:w
    }
};
//удаление товара из корзины
const deleteFromBasket=function(bool){
    return{
        type:delete_from_basket,
        isDelete:bool
    }
}

export {addForBascet, add_for_backet,
    gotoFilter, click_button_filter,
    deleteFromBasket, delete_from_basket}