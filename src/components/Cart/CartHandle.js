import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from '../utils/formatCurrency';
import { updateQuantity, removeItem } from '../redux/cart/cartSlice';
import Alert from '@mui/material/Alert';
import Header from '../components/Header/Header.js';

const CartHandle = () => {
  const cartItems = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (id, color, size) => {
    const key = `${id}-${color}-${size}`;
    setSelectedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const key = `${item.id}-${item.color}-${item.size}`;
      if (selectedItems[key]) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const handleQuantityChange = (id, color, size, quantity, stock) => {
    if (quantity < 1) {
      setAlert('Quantity cannot be less than 1');
      return;
    }
    if (quantity > stock) {
      setAlert('Not enough stock available');
      return;
    }
    dispatch(updateQuantity({ id, color, size, quantity }));
    setAlert(null);
  };

  const handleRemoveItem = (id, color, size) => {
    dispatch(removeItem({ id, color, size }));
    setAlert('Item removed from cart');
  };

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Bag</h1>
        {alert && <Alert severity="warning">{alert}</Alert>}
        <div className="flex">
          <div className="w-2/3 pr-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => {
                const key = `${item.id}-${item.color}-${item.size}`;
                return (
                  <div
                    key={key}
                    className="flex justify-between items-center mb-4 border-b pb-4"
                  >
                    <input
                      type="checkbox"
                      checked={!!selectedItems[key]}
                      onChange={() =>
                        handleCheckboxChange(item.id, item.color, item.size)
                      }
                      className="mr-4"
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24"
                    />
                    <div className="flex-1 ml-4">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p>{item.description}</p>
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                      <div className="flex items-center mt-2">
                        <span>Quantity:</span>
                        <button
                          className="px-2"
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.color,
                              item.size,
                              item.quantity - 1,
                              item.quantityStock // Use quantityStock here
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (newQuantity < 1) {
                              setAlert('Quantity cannot be less than 1');
                            } else if (newQuantity > item.quantityStock) {
                              setAlert('Not enough stock available');
                            } else {
                              handleQuantityChange(
                                item.id,
                                item.color,
                                item.size,
                                newQuantity,
                                item.quantityStock
                              );
                            }
                          }}
                          className="w-12 text-center border mx-2"
                        />
                        <button
                          className="px-2"
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.color,
                              item.size,
                              item.quantity + 1,
                              item.quantityStock // Use quantityStock here
                            )
                          }
                        >
                          +
                        </button>
                        <button
                          className="ml-4 text-red-500"
                          onClick={() =>
                            handleRemoveItem(item.id, item.color, item.size)
                          }
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                      <button
                        className="mt-2 text-red-500"
                        onClick={() =>
                          handleRemoveItem(item.id, item.color, item.size)
                        }
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-lg font-bold text-red-500">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                );
              })
            )}
          </div>
          <div className="w-1/3 pl-4">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatCurrency(calculateSubtotal())}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Shipping & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Tax</span>
              <span>-</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>{formatCurrency(calculateSubtotal())}</span>
            </div>
            <button className="w-full py-2 bg-black text-white font-bold rounded mb-2">
              Checkout
            </button>
            <button className="w-full py-2 bg-blue-500 text-white font-bold rounded">
              PayPal
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartHandle;
