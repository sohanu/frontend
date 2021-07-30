
import axios from 'axios';
import { ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_FAIL, ADD_ITEM_TO_CART_SUCCESS, REMOVE_ITEM_FROM_CART_SUCCESS, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_FROM_CART_FAIL, CART_LIST_SUCCESS, CART_LIST_REQUEST, CART_LIST_FAIL, CLEAR_ALL_SUCCESS, CLEAR_ALL, CLEAR_ALL_FAIL } from '../const/cartconstant';
export const addproductcart = (
    items
) => async (dispatch) => {

    try {
        dispatch({ type: ADD_ITEM_TO_CART });

        const { data } = await axios.post(
            `http://localhost:5001/api/cartitems`, {
            data: items
        }
        );
        dispatch({
            type: ADD_ITEM_TO_CART_SUCCESS,
            payload: data.items,

        });

    } catch (error) {
        dispatch({
            type: ADD_ITEM_TO_CART_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const removeproductcart = (
    name
) => async (dispatch) => {

    try {
        dispatch({ type: REMOVE_ITEM_FROM_CART });

        const { data } = await axios.post(
            `http://localhost:5001/api/cart`,
            {
                name: name
            }
        );
        dispatch({
            type: REMOVE_ITEM_FROM_CART_SUCCESS,
            payload: name,

        });

    } catch (error) {
        dispatch({
            type: REMOVE_ITEM_FROM_CART_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const cartlist = (
) => async (dispatch) => {

    try {
        dispatch({ type: CART_LIST_REQUEST });

        const { data } = await axios.get(
            `http://localhost:5001/api/cartitem`
        );

        dispatch({
            type: CART_LIST_SUCCESS,
            payload: data.items,

        });

    } catch (error) {
        dispatch({
            type: CART_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const clearall =
    (
    ) => async (dispatch) => {
        try {

            dispatch({
                type: CLEAR_ALL
            })
            const { data } = await axios.post(
                `http://localhost:5001/api/cartclear`
            );

            dispatch({
                type: CLEAR_ALL_SUCCESS,
                payload: data.items,

            });

        } catch (error) {
            dispatch({
                type: CLEAR_ALL_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };