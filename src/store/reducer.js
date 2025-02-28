const initialState = {
    data: [],
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    user: JSON.parse(localStorage.getItem("user")) || null,
    showForm: false
};

export function reducer(state = initialState, action){
    let newBasket;
    switch(action.type){
        case "ADD_MANY_PRODUCTS":
            return {...state, data: [...action.payload]};
        case "ADD_TO_BASKET":
            const product = action.payload.product;
            product.basketId = action.payload.basketId;
            product.quantity = 1;
            if(state.basket.find(item => item.id === product.id)){
                newBasket = state.basket.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item);
                localStorage.setItem("basket", JSON.stringify(newBasket));
                return {...state, basket: newBasket};
            }else{
                newBasket = [...state.basket, product];
                localStorage.setItem("basket", JSON.stringify(newBasket));
                return {...state, basket: newBasket};;
            }
        case "REMOVE_TO_BASKET":
            newBasket = state.basket.filter(item => item.basketId !== action.payload);
            localStorage.setItem("basket", JSON.stringify(newBasket));
            return {...state, basket: newBasket};
        case "INCREMENT_QUANTITY":
            newBasket = state.basket.map(item => item.basketId === action.payload ? {...item, quantity: item.quantity + 1 } : item);
            localStorage.setItem("basket", JSON.stringify(newBasket));
            return {...state, basket: newBasket};
        case "DECREMENT_QUANTITY":
            newBasket = state.basket.map(item => item.basketId === action.payload ? {...item, quantity: (item.quantity > 1) ? item.quantity - 1 : item.quantity } : item);
            localStorage.setItem("basket", JSON.stringify(newBasket));
            return {...state, basket: newBasket};
        case "SAVE_USER_DATA":
            localStorage.setItem("user", null);
            return {...state, user: action.payload};
        case "OPEN_FORM":
            return {...state, showForm: true};
        case "CLOSE_FORM":
            return {...state, showForm: false};
        default:
            return state;
    }
}

export const addManyProducts = (payload) => ({type: "ADD_MANY_PRODUCTS", payload});