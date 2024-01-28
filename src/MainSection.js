import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { cancelOrder } from './actions'; 
import TotalDeliveredForm from './TotalDeliveredForm';

const MainSection = ({ orders }) => {
  const [pickedOrders, setPickedOrders] = useState([]);
  const dispatch = useDispatch(); 
  const [isOrderLimitReached, setIsOrderLimitReached] = useState(false);

  useEffect(() => {
    const newPickedOrders = orders.filter((order) => order.stage === 'Order Picked');
    setPickedOrders(newPickedOrders);

    
    const currentOrderCount = orders.length;
    const isLimitReached = currentOrderCount >= 10;

    if (isOrderLimitReached !== isLimitReached) {
      setIsOrderLimitReached(isLimitReached);
      
      if (isLimitReached) {
        showAlert();
      }
    }
  }, [orders, isOrderLimitReached]);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

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

  const getTableRow = (order) => {
    const makingTime = getMakingTime(order.size);

    const currentTimeInSeconds = new Date().getTime() / 1000;
    const elapsedSeconds = currentTimeInSeconds - order.startTime;

    const isDelayed = order.stage !== 'Order Placed' && elapsedSeconds > 180;

    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = Math.floor(elapsedSeconds % 60);
    const elapsedTime = `${minutes} min ${seconds} sec`;

    return (
      <tr key={order.id} className={isDelayed ? 'delayed' : ''}>
        <td>{order.id}</td>
        <td>{order.stage}</td>
        <td>
          {order.stage === 'Order Placed' && elapsedSeconds > 180 ? (
            <span className="red-highlight">0 min 0 sec</span>
          ) : (
            `${makingTime} min`
          )}
        </td>
        <td>
          {order.stage !== 'Order Ready' && order.stage !== 'Order Placed' && order.stage !== 'Order Picked' && (
            <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
          )}
        </td>
      </tr>
    );
  };

  const showAlert = () => {
    alert("Not taking any order for now.");
  };

  
  const sortedOrders = orders.slice().sort((a, b) => {
    const timeA = a.timeInSeconds || 0;
    const timeB = b.timeInSeconds || 0;
    const delayA = a.stage !== 'Order Placed' ? timeA - a.startTime : 0;
    const delayB = b.stage !== 'Order Placed' ? timeB - b.startTime : 0;
    return delayB - delayA;
  });

  return (
    <div className="main-container">
      <h2>Main Section</h2>
      {isOrderLimitReached && showAlert()}
      <table className="bordered">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order) => getTableRow(order))}
        </tbody>
      </table>
      <TotalDeliveredForm totalPicked={pickedOrders.length} />
    </div>
  );
};

export default MainSection;
