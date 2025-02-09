import { useState, useEffect } from "react";
import { ProductCard } from "./Product";

const mockProducts = [
    { id: 1, title: "Wireless Headphones", price: 59.99, image: "https://shop-ease-resouces.s3.ap-south-1.amazonaws.com/pic-1.jpg" },
    { id: 2, title: "Smart Watch", price: 99.99, image: "https://shop-ease-resouces.s3.ap-south-1.amazonaws.com/pic-2.jpg" },
    { id: 3, title: "Gaming Mouse", price: 29.99, image: "https://shop-ease-resouces.s3.ap-south-1.amazonaws.com/pic-3.jpg" },
    { id: 4, title: "Portable Speaker", price: 49.99, image: "https://shop-ease-resouces.s3.ap-south-1.amazonaws.com/pic-4.jpg" }
  ];

export const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setProducts(mockProducts);
    }, []);
  
    return (
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  
  export default ProductList;
  