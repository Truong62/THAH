import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { ProgressSpinner } from 'primereact/progressspinner';
import {
  FaCheckCircle,
  FaShippingFast,
  FaTruck,
  FaBoxOpen,
  FaTimesCircle,
} from 'react-icons/fa';
import orders from '../order.json';
import Header from '../components/Header/Header';

const TrackingPage = () => {
  const [orderCode, setOrderCode] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = () => {
    const foundOrder = orders.find((order) => order.orderCode === orderCode);
    setOrderData(foundOrder || null);
  };

  const getStatusIndex = (status) => {
    const steps = [
      'Order Confirmed',
      'Shipped',
      'Out For Delivery',
      'Delivered',
    ];
    return steps.indexOf(status);
  };

  const getSeverity = (status) => {
    switch (status) {
      case 'Cancelled':
        return { severity: 'danger', icon: <faTimesCircle /> };
      case 'Pending':
        return { severity: 'secondary', icon: <faClock /> };
      default:
        return { severity: 'info', icon: <faInfoCircle /> };
    }
  };

  const statusIcons = {
    'Order Confirmed': <FaCheckCircle className="text-green-500 text-xl" />,
    Shipped: <FaTruck className="text-yellow-500 text-xl" />,
    'Out For Delivery': <FaShippingFast className="text-blue-500 text-xl" />,
    Delivered: <FaBoxOpen className="text-purple-500 text-xl" />,
    Cancelled: <FaTimesCircle className="text-red-500 text-xl" />,
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-[#A8DCE7] min-h-screen p-8">
        <div className="w-full max-w-4xl mb-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/457/610/large_2x/delivery-cute-stickers-template-set-vector.jpg"
            alt="Order Tracking Banner"
            className="w-full h-auto object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-center text-[#272B3B] mb-4">
            Track Your Order
          </h1>
          <div className="flex gap-2">
            <InputText
              placeholder="Enter order code"
              className="p-inputtext-lg w-full h-12 border rounded-lg p-2"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
            />
            <Button
              label="Find"
              className="p-button-danger p-button-lg border rounded-lg p-2"
              onClick={handleSearch}
            />
          </div>

          {orderData && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-100">
              <h2 className="text-xl font-bold">
                Order Code: {orderData.orderCode}
              </h2>
              <p className="text-gray-700">
                <strong>Customer:</strong> {orderData.customerName}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {orderData.phoneNumber}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {orderData.email}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {orderData.detailAddress}
              </p>
              <p className="text-gray-700">
                <strong>Order Date:</strong> {orderData.orderDate}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong>{' '}
                <Tag
                  severity={getSeverity(orderData.status)}
                  value={orderData.status}
                />
              </p>

              {orderData.status === 'Pending' && (
                <div className="flex flex-col items-center mt-6">
                  <ProgressSpinner
                    style={{ width: '40px', height: '40px' }}
                    strokeWidth="5"
                    animationDuration=".5s"
                  />
                  <span className="text-sm font-semibold text-black mt-2">
                    Processing...
                  </span>
                </div>
              )}

              {orderData.status !== 'Pending' &&
                orderData.status !== 'Cancelled' && (
                  <>
                    <div className="flex items-center justify-between mt-6">
                      {[
                        'Order Confirmed',
                        'Shipped',
                        'Out For Delivery',
                        'Delivered',
                      ].map((step, index) => {
                        const isActive =
                          index <= getStatusIndex(orderData.status);
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center"
                          >
                            {isMobile ? (
                              <span
                                className={
                                  isActive ? 'text-green-500' : 'text-gray-400'
                                }
                              >
                                {statusIcons[step]}
                              </span>
                            ) : (
                              <>
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    isActive ? 'bg-green-500' : 'bg-gray-300'
                                  }`}
                                />
                                <span
                                  className={`text-sm font-semibold ${isActive ? 'text-green-600' : 'text-gray-400'}`}
                                >
                                  {step}
                                </span>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="w-full h-1 bg-gray-300 mt-2 relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-green-500"
                        style={{
                          width: `${(getStatusIndex(orderData.status) / 3) * 100}%`,
                        }}
                      />
                    </div>
                  </>
                )}

              <h3 className="font-semibold mt-4">Products:</h3>
              <div className="mt-2 space-y-2">
                {orderData.cartItems?.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg bg-white"
                  >
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex flex-col flex-1 ml-4">
                      <span className="font-semibold">
                        {product.productName}
                      </span>
                      <span className="text-gray-500">
                        Size: {product.size}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      Qty: {product.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrackingPage;
