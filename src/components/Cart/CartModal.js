// src/components/CartModal.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../utils/formatCurrency";
import { updateQuantity } from "../../redux/cart/cartSlice";

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (id, color, size, quantity) => {
    if (quantity >= 0) {
      dispatch(updateQuantity({ id, color, size, quantity }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-1/3 h-full p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            Your Cart: {cartItems.length} items
          </h1>
          <button
            onClick={onClose}
            className="text-gray-500 bg-gray-200 p-2 rounded"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center">
            <p>Not item in cart.</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.color}-${item.size}`}
                className="flex justify-between items-center mb-4"
              >
                <img src={item.image} alt={item.name} className="w-16 h-16" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.color,
                          item.size,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          item.color,
                          item.size,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-12 text-center border mx-2"
                    />
                    <button
                      className="px-2"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          item.color,
                          item.size,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold text-red-500">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">Subtotal:</h2>
              <p className="text-lg font-bold text-red-500">
                {formatCurrency(calculateSubtotal())}
              </p>
            </div>
            <button className="w-full mt-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
              Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
