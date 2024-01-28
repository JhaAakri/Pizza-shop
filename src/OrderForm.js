import React, { useState } from 'react';

const OrderForm = ({ placeOrder }) => {
  const [order, setOrder] = useState({
    type: 'Veg',
    size: 'Large',
    base: 'Thin',
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(order);
    setOrder({
      type: 'Veg',
      size: 'Large',
      base: 'Thin',
    });
  };

  return (
    <div className="form-container">
      <h2>Place Pizza Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type" value={order.type} onChange={handleChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </label>
        <label>
          Size:
          <select name="size" value={order.size} onChange={handleChange}>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
        <label>
          Base:
          <select name="base" value={order.base} onChange={handleChange}>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
