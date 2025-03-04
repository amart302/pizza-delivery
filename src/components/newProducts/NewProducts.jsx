import { useSelector } from "react-redux";
import "./newProducts.css";
import NewProductsSceleton from "../sceleton/NewProductsSceleton"

export default function NewProducts(isLoading){
    const data = useSelector(state => state.data);
    const i = 0;
    const func = () => {
        i++;
        if(i < 4) func();
        return 
    }
    return (
        <div className="new-products-container">
            {
                (isLoading.meaning) ? 
                [...Array(4)].map((_, index) => (
                    <NewProductsSceleton key={index} />
                ))
                : data.map(item => (
                    (item.new) ? 
                    <div className="new-product-card" key={item.id}>
                        <img src={item.image} alt="" />
                        <div className="new-product-info">
                            <p className="new-product-name">{item.name}</p>
                            <p className="new-product-price">от {item.price} ₽</p>
                        </div>
                    </div>
                    : false))
            }
        </div>
    )
}