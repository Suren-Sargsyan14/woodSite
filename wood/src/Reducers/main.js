import {
  SET_PAGE,
  SET_PRODUCTS,
  SET_PAGE_COUNT,
  SET_LATEST_PRODUCTS,
} from '../Actions/actionTypes';

const initialState = {
  products: [],
  latestProducts: [],
  page: 0,
  pageCount: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_PRODUCTS: {
      return {
        ...state,
        latestProducts: payload,
      }
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      }
    }
    case SET_PAGE: {
      return {
        ...state,
        page: payload,
      }
    }
    case SET_PAGE_COUNT: {
      return {
        ...state,
        pageCount: payload,
      }
    }
    default:
      return state;
  }
};
