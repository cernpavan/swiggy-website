import React, { useState, useEffect } from 'react';
import { API_URL } from '../Api';
import { useParams } from 'react-router-dom';

const ProductMenu = () => {
    const [product, setProduct] = useState([]);
    const { firmid } = useParams();

    const productHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/product/${firmid}/products`);
            const newProductData = await response.json();
            setProduct(newProductData.products);
        } catch (error) {
            console.error("Failed to fetch data", error);
            alert("Failed to fetch data");
        }
    };

    useEffect(() => {
        productHandler();
    }, [firmid]);

    return (
        <section className="productSection">
            {product.map((item) => (
                <div key={item._id}>
                    {item.productName}
                </div>
            ))}
        </section>
    );
};

export default ProductMenu;
