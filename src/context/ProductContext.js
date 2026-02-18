import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        error,
        setError,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
