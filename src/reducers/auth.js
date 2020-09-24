import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGOUT,
  LOGOUT_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  authState: false,
  loading: true,
  user: null,
  errors: { code: "", message: "" },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, authState: true, loading: false, user: payload };
    case REGISTER_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOGOUT:
      return { ...state, loading: false, authState: false, user: null };
    case LOGOUT_ERROR:
    case LOGIN_FAIL:
      return { ...state, loading: false, errors: payload };
    case AUTH_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}