//Propiedades
import { GET_ALL_PROPERTIES } from "./actions";
import { GET_PROPERTY_ID } from "./actions";

//Usuarios
import { GET_ALL_USERS } from "./actions";
import { LOGIN_USER } from "./actions";

import { GET_SEARCH_FILTER } from "./actions";
import { CLEAR_DETAILS_STATE } from "./actions";
import { CLEAR_SEARCH_STATE } from "./actions";
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER } from "./actions";

const initialState = {
  propiedades: [],
  details: {
    images: [],
  },
  search: [],
  users: [],
  userData: null,
  isLoggedIn: false,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        propiedades: payload,
      };

    case GET_PROPERTY_ID:
      return {
        ...state,
        details: payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        userData: payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userData: payload,
        isLoggedIn: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        userData: null,
        isLoggedIn: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        userData: null,
        isLoggedIn: false,
      };
      
    case GET_SEARCH_FILTER:
      return {
        ...state,
        search: payload,
      };

    case CLEAR_DETAILS_STATE:
      return {
        ...state,
        details: {},
      };

    case CLEAR_SEARCH_STATE:
      return {
        ...state,
        search: {},
      };
    default:
      return state;
  }
}

export default rootReducer;
