const add_for_backet='add_for_backet';

const addForBascet=function(code){
    return {
        type:add_for_backet,
        isSelected:code,
    }
};


export {addForBascet, add_for_backet}