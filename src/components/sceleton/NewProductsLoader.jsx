import React from "react";
import NewProductsSceleton from "./NewProductsSceleton";

export default function NewProductsLoader({ count }){
    const loaders = Array.from({ length: count });

    return (
        <>
            {loaders.map((_, index) => (
                <NewProductsSceleton key={index} />
            ))}
        </>
    );
};