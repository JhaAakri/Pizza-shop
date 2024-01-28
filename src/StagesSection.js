import React from 'react';

const StagesSection = ({ orders, nextStage, pickOrder }) => {
  const getMakingTime = (size) => {
    switch (size) {
      case 'Small':
        return 3;
      case 'Medium':
        return 4;
      case 'Large':
        return 5;
      default:
        return 0;
    }
  };

  const getOrderCard = (order) => {
    const makingTime = getMakingTime(order.size);

    console.log(`Order ID: ${order.id}, Stage: ${order.stage}, Size: ${order.size}, Making Time: ${makingTime}`);

    const currentTimeInSeconds = new Date().getTime() / 1000;
    const elapsedSeconds = currentTimeInSeconds - order.startTime;
    const isDelayed = order.stage !== 'Order Placed' && elapsedSeconds > 180;

    const content = (
      <div key={order.id} className={`order-card ${order.stage === 'Order Placed' ? 'placed' : ''} ${isDelayed ? 'delayed' : ''}`}>
        <p>Order ID: {order.id}</p>
        {order.stage === 'Order Picked' && <p>Picked</p>}
        {order.stage !== 'Order Picked' && (
          <p>
            Time: {order.stage === 'Order Placed' ? ` ${makingTime} min` : `${makingTime} min`}
          </p>
        )}
        <div className="actions">
          {order.stage !== 'Order Picked' && <button onClick={() => nextStage(order.id)}>Next</button>}
        </div>
      </div>
    );

    return content;
  };

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

export default StagesSection;
