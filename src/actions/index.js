import $axios from '../config/axiosInstance';
import * as url from '../enums/url';
import {
  GET_DATA,
  PURCHASE,
  FAVORITE
} from '../enums/mutations';

export const getCategoryProduct = () => {
  return async dispatch => {
    const { data } = (await $axios.get(url.getCategoryProduct)).data[0];
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }
}

export const purchase = (payload) => ({
  type: PURCHASE,
  payload
});

export const fav = (payload) => ({
  type: FAVORITE,
  payload
})

