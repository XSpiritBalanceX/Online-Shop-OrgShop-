const load_data='load_data';
const add_for_backet='add_for_backet';
const click_button_filter='click_button_filter';
const delete_from_basket='delete_from_basket';
const add_count='add_count';
const update_count_item='update_count_item';
const delete_one_elem='delete_one_elem';

//загружаем данные 
const loadData=function(dataInfo, dataBasket){
  return{
    type:load_data,
    dataLoad:dataInfo,
    basketLoad:dataBasket
  }
};

//добавляем товар в корзину
const addForBascet=function(code){
    return {
        type:add_for_backet,
        isSelected:code
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
const deleteFromBasket=function(code){
    return{
        type:delete_from_basket,
        isDelete:code
    }
};

const addCount=function(hash){
    return{
        type:add_count,
        cnts:hash
    }
};

//обновляем количество одного товара в корзине
const ubdateCount=function(counId, value){
    return {
        type:update_count_item,
        countId:counId,
        addValue:value
    }
};

const deleteOneElement=function(code){
    return{
        type:delete_one_elem,
        codeElem:code
    }
}


export {loadData, load_data,
    addForBascet, add_for_backet,
    gotoFilter, click_button_filter,
    deleteFromBasket, delete_from_basket,
    addCount, add_count,
    ubdateCount, update_count_item,
    deleteOneElement, delete_one_elem }