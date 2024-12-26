const initialState = {
    data: [],
    basket: []
};

export function reducer(state = initialState, action){
    switch(action.type){
        case "ADD_MANY_PRODUCTS":
            return {...state, data: [...action.payload]};
        case "ADD_TO_BASKET":
            return {...state, basket: [...state.basket, action.payload]}
        default:
            return state;
    }
}

export const addManyProducts = (payload) => ({type: "ADD_MANY_PRODUCTS", payload});