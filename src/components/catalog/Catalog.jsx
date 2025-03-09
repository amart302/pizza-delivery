import { useDispatch, useSelector } from "react-redux";

import "./catalog.css";
import CatalogSceleton from "../sceleton/CatalogSceleton";
import { useState } from "react";
import { toast } from "sonner";

export default function Catalog(isLoading){
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const data = useSelector(state => state.data);
    
    const addToBusket = (id) => {
        const product = data.find(item => item.id === id);
        
        dispatch({
            type: "ADD_TO_BASKET",
            payload: {
                product: product,
                id: product.id,
                basketId: Date.now()
            }
        });
        toast(<div style={{ fontSize: "16px" }}>Товар добавлен в корзину</div>);
    }

    return(
            <div className="products-container">
                {
                    (isLoading.meaning) ? 
                    [...Array(9)].map((_, index) => (
                        <CatalogSceleton key={index} />
                    ))
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
    )
}