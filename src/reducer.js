import { PLACE_ORDER, NEXT_STAGE, PICK_ORDER, CANCEL_ORDER, UPDATE_TIME } from './actions';

const initialState = {
  orders: [],
  totalDelivered: 0,
  totalTime: '0 min 0 sec',
};

const getNextStage = (currentStage) => {
  switch (currentStage) {
    case 'Order Placed':
      return 'Order in Making';
    case 'Order in Making':
      return 'Order Ready';
    case 'Order Ready':
      return 'Order Picked';
    default:
      return currentStage;
  }
};

const getTimeInSeconds = (stage, size) => {
  let makingTime;
  switch (size) {
    case 'Small':
      makingTime = 3;
      break;
    case 'Medium':
      makingTime = 4;
      break;
    case 'Large':
      makingTime = 5;
      break;
    default:
      makingTime = 0;
  }

  switch (stage) {
    case 'Order Placed':
      return 0;
    case 'Order in Making':
      return makingTime * 60; // Convert making time to seconds
    case 'Order Ready':
      return 3 * 60; 
    case 'Order Picked':
      return 0;
    default:
      return 0;
  }
};

const calculateTotalTime = (orders) => {
  const totalSeconds = orders.reduce((total, order) => total + order.timeInSeconds, 0);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} min ${seconds} sec`;
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        totalDelivered: state.totalDelivered + 1,
      };
    case NEXT_STAGE:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.id === action.payload) {
            const nextStage = getNextStage(order.stage);
            return {
              ...order,
              stage: nextStage,
              time: order.stage === 'Order Placed' ? '0 min 0 sec' : order.time,
              timeInSeconds: order.timeInSeconds + getTimeInSeconds(order.stage, order.size),
            };
          }
          return order;
        }),
      };
    case PICK_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.id === action.payload) {
            return {
              ...order,
              stage: 'Order Picked',
            };
          }
          return order;
        }),
      };
    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case UPDATE_TIME:
      return {
        ...state,
        totalTime: calculateTotalTime(state.orders),
      };
    default:
      return state;
  }
};

export default pizzaReducer;