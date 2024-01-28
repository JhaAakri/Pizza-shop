import React from 'react';
import { connect } from 'react-redux';
import { placeOrder, nextStage, pickOrder, cancelOrder } from './actions';
import OrderForm from './OrderForm';
import StagesSection from './StagesSection';
import MainSection from './MainSection';
import './App.css'; 

const App = ({ orders, totalDelivered, placeOrder, nextStage, pickOrder, cancelOrder }) => {
  return (
    <div className="app-container">
      <h1>Pizza Shop</h1>

      {/* Pizza Order */}
      <OrderForm placeOrder={placeOrder} />

      {/* Pizza Stages */}
      <StagesSection orders={orders} nextStage={nextStage} pickOrder={pickOrder} cancelOrder={cancelOrder} />

      {/* Main Section */}
      <MainSection orders={orders} totalDelivered={totalDelivered} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders,
  totalDelivered: state.totalDelivered,
});

const mapDispatchToProps = {
  placeOrder,
  nextStage,
  pickOrder,
  cancelOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
