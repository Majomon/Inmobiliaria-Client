import { GET_ALL_PROPERTIES } from "./actions";
import { GET_PROPERTY_ID } from "./actions";
import { CLEAR_DETAILS_STATE } from "./actions";

const initialState = {
  propiedades: [],
  details: {
    images: [],
  },
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
    case CLEAR_DETAILS_STATE:
      return {
        ...state,
        details: {},
      };

    default:
      return state;
  }
}

export default rootReducer;
