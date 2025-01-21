import React from 'react';

const Newest = () => {
  const defaultImage =
    'https://via.placeholder.com/300?text=Product+Image';

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded shadow text-center"
          >
            <img
              src={defaultImage}
              alt={`Product ${index + 1}`}
              className="w-full h-auto mb-2 rounded"
            />
            <p className="font-medium">Product {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newest;
