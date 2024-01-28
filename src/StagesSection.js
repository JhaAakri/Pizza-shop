import React from 'react';

const PizzaStagesSection = ({ orders, nextStage, pickOrder }) => {
  const getRandomTime = () => {
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
    return `${randomMinutes} min ${randomSeconds} sec`;
  };

  const getOrderCard = (order) => (
    <div key={order.id} className={`order-card ${order.stage === 'Order Placed' ? 'placed' : ''}`}>
      <p>Order ID: {order.id}</p>
      {order.stage === 'Order Picked' && <p>Picked</p>}
      {order.stage !== 'Order Picked' && <p>Time: {getRandomTime()}</p>}
      <div className="actions">
        {order.stage !== 'Order Picked' && <button onClick={() => nextStage(order.id)}>Next</button>}
      </div>
    </div>
  );
  

  const getColumn = (stage) => (
    <div key={stage} className={`stage-column ${stage.toLowerCase().replace(' ', '-')}`}>
      <h3>{stage}</h3>
      {orders.filter((order) => order.stage === stage).map(getOrderCard)}
    </div>
  );

  return (
    <div className="stages-container">
      <h2>Pizza Stages</h2>
      <div className="stages-columns">
        {['Order Placed', 'Order in Making', 'Order Ready', 'Order Picked'].map(getColumn)}
      </div>
    </div>
  );
};

export default PizzaStagesSection;
