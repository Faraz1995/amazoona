import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

export const listProducts = async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("api/products/");
    console.log(data.products);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
