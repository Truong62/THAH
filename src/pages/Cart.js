// src/pages/Cart.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../utils/formatCurrency";
import { updateQuantity, removeItem } from "../redux/cart/cartSlice";
import Alert from "@mui/material/Alert";
import Header from "../components/Header/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to show per page
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (currentPage * itemsPerPage < cartItems.length) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      } else {
        // Scrolling up
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, lastScrollTop, cartItems.length]);

  useEffect(() => {
    const newVisibleItems = cartItems.slice(0, currentPage * itemsPerPage);
    setVisibleItems(newVisibleItems);
  }, [currentPage, cartItems]);

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

  const calculateTotalItems = () => {
    return cartItems.reduce((count, item) => {
      const key = `${item.id}-${item.color}-${item.size}`;
      if (selectedItems[key]) {
        return count + item.quantity;
      }
      return count;
    }, 0);
  };

  const handleQuantityChange = (id, color, size, quantity, stock) => {
    if (quantity < 1) {
      setAlert("Quantity cannot be less than 1");
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }
    if (quantity > stock) {
      setAlert("Not enough stock available");
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }
    dispatch(updateQuantity({ id, color, size, quantity }));
    setAlert(null);
  };

  const handleRemoveItem = (id, color, size) => {
    dispatch(removeItem({ id, color, size }));
    setAlert("Item removed from cart");
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout");
    } else {
      setAlert("Your cart is empty. Please add items before checking out.");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Bag</h1>
        {alert && <Alert severity="warning">{alert}</Alert>}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 pr-4">
            {visibleItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              visibleItems.map((item) => {
                const key = `${item.id}-${item.color}-${item.size}`;
                return (
                  <div
                    key={key}
                    className="flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-4"
                  >
                    <div className="flex items-center w-full lg:w-1/3">
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
                      <div className="ml-4">
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-gray-500">Color: {item.color}</p>
                        <p className="text-gray-500">Size: {item.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center w-full lg:w-1/3 mt-4 lg:mt-0">
                      <span className="text-gray-500">Quantity:</span>
                      <button
                        className="px-2 text-gray-500"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            item.color,
                            item.size,
                            item.quantity - 1,
                            item.stock
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
                            setAlert("Quantity cannot be less than 1");
                          } else if (newQuantity > item.stock) {
                            setAlert("Not enough stock available");
                          } else {
                            handleQuantityChange(
                              item.id,
                              item.color,
                              item.size,
                              newQuantity,
                              item.stock
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
                            item.stock
                          )
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-4 text-black"
                        onClick={() =>
                          handleRemoveItem(item.id, item.color, item.size)
                        }
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                    <p className="text-lg font-bold text-black w-full lg:w-1/3 text-right">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                );
              })
            )}
          </div>
          <div className="w-full lg:w-1/3 pl-4 lg:sticky lg:top-0 hidden lg:block">
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
              <span className="text-red-500">
                {formatCurrency(calculateSubtotal())}
              </span>
            </div>
            <button
              className={`w-full py-2 bg-black text-white font-bold rounded mb-2 hover:bg-gray-800 ${cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Continue to Checkout
            </button>
            <button className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
              PayPal
            </button>
          </div>
        </div>
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
          <div className="flex justify-between mb-2">
            <span>{calculateTotalItems()} Items</span>
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
            <span className="text-red-500">
              {formatCurrency(calculateSubtotal())}
            </span>
          </div>
          <button
            className={`w-full py-2 bg-black text-white font-bold rounded mb-2 hover:bg-gray-800 ${cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Continue to Checkout
          </button>
          <button className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
            PayPal
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
