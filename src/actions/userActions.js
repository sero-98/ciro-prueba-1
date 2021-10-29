import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });

  try {
    const { data } = await axios.post('https://backend-ciro.herokuapp.com/api/user/login', {email, password});
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

  } catch (error) {
  dispatch({
    type: USER_SIGNIN_FAIL,
    payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
  })    
  }
};