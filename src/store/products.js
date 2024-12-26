import { addManyProducts } from "./reducer";

export const fetchData = () => {
    return (dispatch) => {
        fetch("https://676c565f0e299dd2ddfc99d2.mockapi.io/products/pizzas")
            .then(res => res.json())
            .then(json => dispatch(addManyProducts(json)))
            .catch(err => console.error(err));
    }
}