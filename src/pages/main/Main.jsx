import { useEffect, useState } from "react";
import Catalog from "../../components/catalog/Catalog";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewProducts from "../../components/newProducts/NewProducts";
import { fetchData } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";

import "./main.css";
import { Toaster } from "sonner";

export default function Main(){
    const [ isLoading, setIsLoading ] = useState(true);
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    

    useEffect(() => {
        dispatch(fetchData());
        setTimeout(() => {
            if(data) setIsLoading(false);
        }, 2000)
    }, [data])

    return(
        <div className="App">
            <Header />
            <Toaster richColors position="top-center" />
            <main>
                <div className="main-container1">
                    <div className="slider">
                        <img src="./images/slide2.png" alt="" />
                        <img src="./images/slide3.png" alt="" />
                    </div>
                </div>
                <div className="main-container2">
                    <h2>Новинки</h2>
                    <NewProducts meaning={isLoading}/>
                </div>
                <div className="main-container3">
                    <h2>Паста</h2>
                    <Catalog meaning={isLoading}/>
                </div>
                <div className="main-container4">
                    <h2>Наши <span>акции</span></h2>
                    <div className="main-container4-child">
                        <div className="main-container4-child-pod-block1">
                            <img src="./images/customCakes.png" alt=""/>
                        </div>
                        <div className="main-container4-child-pod-block2">
                            <img src="./images/customCakes.png" alt="" />
                            <img src="./images/customCakes.png" alt="" />
                            <img src="./images/customCakes.png" alt="" />
                            <img src="./images/customCakes.png" alt="" />
                        </div>
                    </div>
                </div>
                <img src="./images/pizzaGuy.png" alt="" className="pizzaGuy"/>
            </main>
            <Footer />
        </div>
    )
}