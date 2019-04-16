import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  // you can also use updateObject for all the other cases
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };
  return {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  };
};

const purchaseBurgerFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const fetchOrdersStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrdersFail = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default orderReducer;