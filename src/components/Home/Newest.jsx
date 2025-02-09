import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data.json';
import CardProduct from '../Card/Card';
import { formatCurrency } from '../../utils/formatCurrency';
import { truncateDescription } from '../../utils/truncateDescription';

const Newest = () => {
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return <div>No products available</div>;
  }

  const sortedProducts = data.sort(
    (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
  );

  const newestProducts = sortedProducts.slice(0, 4);

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newestProducts.map((product, index) => (
          <CardProduct
            key={index}
            nameProduct={product.productName}
            description={truncateDescription(product.productDescription, 30)}
            price={formatCurrency(product.variants[0].price)}
            brand={product.brand}
            nameTag={product.tag}
            imageUrl={product.variants[0].images[0]}
            onClick={() => navigate(`/products/${product.productName}`)}
            badgeText="NEW"
          />
        ))}
      </div>
    </div>
  );
};

export default Newest;
