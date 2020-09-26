import {
  SET_PAGE,
  SET_PRODUCTS,
  SET_PAGE_COUNT,
  SET_LATEST_PRODUCTS,
} from './actionTypes';

import { Popular, Products } from '../services';

export const setPage = page => ({
  type: SET_PAGE,
  payload: page,
});

export const setProducts = () => {
  return async (dispatch, getState) => {
    const { main: { page } } = getState();

    const { data } = await Products.getProducts({ page });
    const products = data.slice(0, -1);
    const pageCount = Math.ceil(data[data.length - 1]["COUNT(*)"] / 12);

    dispatch({
      type: SET_PAGE_COUNT,
      payload: pageCount,
    });
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  };
};

export const setLatestProducts = () => {
  return async dispatch => {
    const { data } = await Popular.getPopular();

    dispatch({
      type: SET_LATEST_PRODUCTS,
      payload: data,
    });
  };
};
