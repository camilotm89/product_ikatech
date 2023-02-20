import React,{ createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) =>{

    const [stateProduct, setStateProduct] = useState(1)

    return(
        <ProductContext.Provider value={{stateProduct, setStateProduct}}>
            {children}
        </ProductContext.Provider>
    )
}