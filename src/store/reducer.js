const initialState = {
    data: [],
    basket: [],
    user: JSON.parse(localStorage.getItem("user")) || null
};

export function reducer(state = initialState, action){
    switch(action.type){
        case "ADD_MANY_PRODUCTS":
            return {...state, data: [...action.payload]};
        case "ADD_TO_BASKET":
            const product = action.payload.product;
            product.basketId = action.payload.basketId;
            product.quantity = 1;
            if(state.basket.find(item => item.id === product.id)){
                return {
                    ...state,
                    basket: state.basket.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item)
                }
            }else{
                return {...state, basket: [...state.basket, product]};
            }
        case "REMOVE_TO_BASKET":
            return {...state, basket: state.basket.filter(item => item.basketId !== action.payload)}
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                basket: state.basket.map(item => item.basketId === action.payload ? {...item, quantity: item.quantity + 1 } : item)
            }
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                basket: state.basket.map(item => item.basketId === action.payload ? {...item, quantity: (item.quantity > 1) ? item.quantity - 1 : item.quantity } : item)
            }
        case "SAVE_USER_DATA":
            return {...state, user: action.payload};
        default:
            return state;
    }
}

export const addManyProducts = (payload) => ({type: "ADD_MANY_PRODUCTS", payload});