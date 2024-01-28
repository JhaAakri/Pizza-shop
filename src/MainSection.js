import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { cancelOrder } from './actions'; 
import TotalDeliveredForm from './TotalDeliveredForm';

const MainSection = ({ orders }) => {
  const [pickedOrders, setPickedOrders] = useState([]);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const newPickedOrders = orders.filter((order) => order.stage === 'Order Picked');
    setPickedOrders(newPickedOrders);
  }, [orders]);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  const getTableRow = (order, index, array) => {
    const makingTime = order.size === 'Small' ? 3 : (order.size === 'Medium' ? 4 : 5);

    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
    const randomTime = `${randomMinutes} min ${randomSeconds} sec`;
  
    return (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.stage}</td>
        <td>{order.stage === 'Order Placed' ? '0 min 0 sec' : randomTime}</td>
        <td>
          {order.stage !== 'Order Ready' && order.stage !== 'Order Placed' && order.stage !== 'Order Picked' && (
            <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
          )}
        </td>
      </tr>
    );
  };
  

  const sortedOrders = orders.slice().sort((a, b) => {
    const timeA = a.timeInSeconds || 0;
    const timeB = b.timeInSeconds || 0;
    return timeB - timeA;
  });

  return (
    <div className="main-container">
      <h2>Main Section</h2>
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
          {sortedOrders.map((order, index, array) => getTableRow(order, index, array))}
        </tbody>
      </table>
      <TotalDeliveredForm totalPicked={pickedOrders.length} />
    </div>
  );
};

export default MainSection;
