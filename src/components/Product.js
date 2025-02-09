import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product">
      <img
        src={product.image}
        alt={product.title}
        className="img"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-500">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
          disabled={added}
        >
          🛒 {added ? "Added!" : "Add to Cart1"}
        </button>
      </div>
    </div>
  );
};

