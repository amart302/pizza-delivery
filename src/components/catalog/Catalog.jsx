import { useDispatch, useSelector } from "react-redux";

import "./catalog.css";
import ProductsLoader from "../sceleton/ProductsLoader";
import { useState } from "react";

export default function Catalog(isLoading){
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [ messageStyles, setMessageStyles ] = useState({
        top: "-100px",
        opacity: 0
    })
    const [ message, setMessage ] = useState(false);
    
    const addToBusket = (id) => {
        const product = data.find(item => item.id == id);
        
        dispatch({
            type: "ADD_TO_BASKET",
            payload: {
                product: product,
                id: product.id,
                basketId: Date.now()
            }
        })
        basketMessage();
    }

    const basketMessage = () => {
        setMessage(true);
        setTimeout(() => {
            setMessageStyles({
                top: "20px",
                opacity: 1
            });
        }, 50)
        setTimeout(() => {
            setMessageStyles({
                top: "100px",
                opacity: 0
            })
        }, 500)
        setTimeout(() => {
            setMessage(false);
            setMessageStyles({
                top: "-100px",
                opacity: 0
            })
        }, 800)
    }

    return(
            <>
                {
                    message && 
                    <div className="message" style={messageStyles}>
                        Товар добавлен в корзину
                    </div>
                }
                <div className="products-container">
                    {
                        (isLoading.meaning) ? <ProductsLoader count={12} />
                        : data.map(item => (
                            <div className="product-card" key={item.id}>
                                <img src={item.image} alt="" />
                                <div className="product-info">
                                    <p className="product-name">{item.name}</p>
                                    <p className="product-description">{item.description}</p>
                                </div>
                                <div className="product-card-bottom">
                                    <p className="product-price">от {item.price} ₽</p>
                                    <button className="add-to-basket-button" onClick={() => addToBusket(item.id)}>Добавить в корзину</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
    )
}