import { GET_ALL_PROPERTIES } from "./actions";
import { GET_PROPERTY_ID } from "./actions";
import { GET_SEARCH_FILTER } from "./actions";

import { CLEAR_DETAILS_STATE } from "./actions";
import { CLEAR_SEARCH_STATE } from "./actions";

const initialState = {
  propiedades: [],
  details: {
    images: [],
  },
  search: {},
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
