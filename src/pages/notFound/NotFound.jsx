import BasketHeader from "../../components/smallHeader/smallHeader";
import Footer from "../../components/footer/Footer";
import "./notFound.css";

export default function NotFound(){
    
    return(
        <>
            <BasketHeader />
            <main className="not-found-main">
                <h1>
                    Страница не найдена
                </h1>
            </main>
            <Footer />
        </>
    );
}