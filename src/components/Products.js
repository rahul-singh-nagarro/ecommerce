import { useState, useEffect } from "react";
import { ProductCard } from "./Product";

const mockProducts = [
    { id: 1, title: "Wireless Headphones", price: 59.99, image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXJsfGVufDB8fDB8fHww" },
    { id: 2, title: "Smart Watch", price: 99.99, image: "https://media.istockphoto.com/id/2030192156/photo/global-data-flow-and-connectivity-east-asia.webp?a=1&b=1&s=612x612&w=0&k=20&c=ajVl9ei01X1fjPjIKXZl5AT96B2lOGL9ja6QONimdiI=" },
    { id: 3, title: "Gaming Mouse", price: 29.99, image: "https://media.istockphoto.com/id/2180695620/photo/scam-alert-warning-with-cybersecurity-icons-a-person-using-laptop-warning-sign-for-scams-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=gympaCdU4ihATXnNIO0XHkMz9wRE47_LaFwahZiBn4U=" },
    { id: 4, title: "Portable Speaker", price: 49.99, image: "https://media.istockphoto.com/id/2151295139/photo/professional-online-gamer-hand-fingers.webp?a=1&b=1&s=612x612&w=0&k=20&c=nAUdTdR6ziYnwBciABQvbzgt2U_AgTRx1XJbh2HtbE8=" }
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
  