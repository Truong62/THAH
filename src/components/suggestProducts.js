import React from 'react';
import products from '../data.json'; // Import the products array

const SuggestProducts = () => {
  // Giả sử bạn có một số logic để lấy sản phẩm gợi ý
  const suggestedProducts = products.filter(
    (product) => product.status === true
  ); // Lọc sản phẩm có trạng thái true

  return (
    <div>
      <h2>Suggested Products</h2>
      <div className="suggested-products">
        {suggestedProducts.length > 0 ? (
          suggestedProducts.map((product) => (
            <div key={product.productId}>
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
              <p>Price: {product.variant.$values[0]?.unitPrice}</p>{' '}
              {/* Sử dụng optional chaining */}
            </div>
          ))
        ) : (
          <p>No suggested products available.</p>
        )}
      </div>
    </div>
  );
};

export default SuggestProducts;
