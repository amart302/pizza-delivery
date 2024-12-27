import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";


import "./basket.css";
import { useEffect, useState } from "react";
import BasketHeader from "../../components/basketHeader/BasketHeader";
import { useNavigate } from "react-router-dom";

export default function Basket(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const basket = useSelector(state => state.basket);
    const [ check, setCheck ] = useState(false);

    useEffect(() => {
        if(basket.length) setCheck(true);
        else setCheck(false);
        console.log(basket);
        
    }, [basket])

    const incrementQuantity = (id) => {
        dispatch({
            type: "INCREMENT_QUANTITY",
            payload: id
        })
    }

    const decrementQuantity = (id) => {
        dispatch({
            type: "DECREMENT_QUANTITY",
            payload: id
        })
    }

    const removeToBasket = (basketId) => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            payload: basketId
        })
    }
    
    const priceCalculationFunction = () => {
        let result = 0
        basket.map(item => {
            result += item.price * item.quantity;
        });
        return result;
    }

    return (
        <div className="App">
            <BasketHeader />
            <main className="basket-main" style={(!check) ? {justifyContent: "center", alignItems: "center"} : {}}>
                {(!check) ? <><img src="./images/emptyBasket.png" alt="" className="emptyBasket"/><h2>Ваша корзина пуста</h2></> : <h2 style={{color: "#F7D22D"}}>Корзина</h2>}
                <div className="basket-products-container">
                    {
                        check && basket.map(item => (
                            <div className="basket-card">
                            <img src={item.image} alt="" />
                            <div className="basket-card-info">
                                <p className="basket-card-name">{item.name}</p>
                                <p className="basket-card-description">{item.description}</p>
                            </div>
                            <p className="basket-card-price">{item.price} ₽</p>
                            <div className="basket-card-quantity-parent">
                                <div className="basket-card-quantity">
                                    <button style={{borderRadius: "8px 0px 0px 8px"}} onClick={() => decrementQuantity(item.basketId)}>-</button>
                                    <p>{item.quantity}</p>
                                    <button style={{borderRadius: "0px 8px 8px 0px"}} onClick={() => incrementQuantity(item.basketId)}>+</button>
                                </div>
                            </div>
                            <img src="./images/deleteCross.svg" alt="" className="deleteCross" onClick={() => removeToBasket(item.basketId)}/>
                        </div>
                        ))
                    }
                </div>
                {
                        check && 
                        <div className="orderAmountContainer">
                            <div className="promoCodeContainer">
                                <h3>Промокод</h3>
                                <div className="promoCodeInputContainer">
                                    <input type="text" placeholder="Введите промокод" />
                                    <button>Применить</button>
                                </div>
                            </div>
                            <div className="orderSummaryContainer">
                                <h3>Сумма заказа: <span>{priceCalculationFunction()} ₽</span></h3>
                                <button>Оформить заказ</button>
                            </div>
                        </div>
                    }
                    <button className="backToShopButton" onClick={() => navigate("/")}><img src="./images/arrow.svg" alt="" />Вернуться в магазин</button>
            </main>
            <Footer />
        </div>
    )
}