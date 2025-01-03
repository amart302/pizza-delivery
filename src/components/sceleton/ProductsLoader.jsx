import React from "react";
import ProductsSceleton from "./ProductsSceleton";


export default function ProductsLoader({ count }){
    const loaders = Array.from({ length: count });

    return (
        <>
            {loaders.map((_, index) => (
                <ProductsSceleton key={index} />
            ))}
        </>
    );
};