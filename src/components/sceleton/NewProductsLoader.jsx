import React from "react";
import NewProductsSceleton from "./NewProductsSceleton";

export default function NewProductsLoader({ count }){
    const loaders = Array.from({ length: count });

    return (
        <div className="new-products-loader-container">
            {loaders.map((_, index) => (
                <NewProductsSceleton key={index} />
            ))}
        </div>
    );
};