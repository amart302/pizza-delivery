import { useSelector } from "react-redux";
import "./newProducts.css";
import NewProductsLoader from "../sceleton/NewProductsLoader"

export default function NewProducts(isLoading){
    const data = useSelector(state => state.data);

    return (
        <div className="new-products-container">
            {
                (isLoading.meaning) ? <NewProductsLoader count={4}/>
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