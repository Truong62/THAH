import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency'; // Ensure this utility is imported

/**
 *
 * @returns {Element}
 * @constructor
 */
const ThankYouPage = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <p className="text-center text-2xl font-bold">
        Order details are not available.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Thank You for Your Order!
      </h1>
      <div className="border-b-2 border-gray-300 mb-4 pb-4">
        <h2 className="text-xl font-bold">Customer Information</h2>
        <p>
          <strong>Name:</strong> {orderDetails.fullName}
        </p>
        <p>
          <strong>Email:</strong> {orderDetails.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {orderDetails.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {orderDetails.detailAddress},{' '}
          {orderDetails.ward}, {orderDetails.district}, {orderDetails.province}
        </p>
      </div>
      <div className="border-b-2 border-gray-300 mb-4 pb-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
        {orderDetails.items.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="flex items-center mb-4"
          >
            <img src={item.image} alt={item.name} className="w-24 h-24 mr-4" />
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p>
                Size: {item.size}, Qty: {item.quantity}, Color: {item.color}
              </p>
            </div>
            <p className="text-right">
              {formatCurrency(item.price * item.quantity)}
            </p>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Total</span>
          <span className="text-red-500">{orderDetails.total}</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          If you have any questions about your order, please contact us at
          support@example.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
