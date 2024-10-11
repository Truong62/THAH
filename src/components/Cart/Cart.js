// src/components/Cart.js
import React, { useState } from "react";
import CartModal from "./CartModal";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Open Cart</button>
      <CartModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Cart;
