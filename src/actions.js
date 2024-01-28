export const PLACE_ORDER = 'PLACE_ORDER';
export const NEXT_STAGE = 'NEXT_STAGE';
export const PICK_ORDER = 'PICK_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const UPDATE_TIME = 'UPDATE_TIME';

export const placeOrder = (order) => ({
  type: PLACE_ORDER,
  payload: { ...order, id: Date.now(), stage: 'Order Placed', time: '0 min 0 sec', remainingTime: 'N/A', timeInSeconds: 0 },
});

export const nextStage = (orderId) => ({
  type: NEXT_STAGE,
  payload: orderId,
});

export const pickOrder = (orderId) => ({
  type: PICK_ORDER,
  payload: orderId,
});

export const cancelOrder = (orderId) => ({
  type: CANCEL_ORDER,
  payload: orderId,
});

export const updateTime = () => ({
  type: UPDATE_TIME,
});