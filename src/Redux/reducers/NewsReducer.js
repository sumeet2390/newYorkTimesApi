import {
  GET_NEWS_DETAILS,
  GET_NEWS_DETAILS_SUCCESS,
  GET_NEWS_DETAILS_ERROR,
  CLEAR_NEWS_DETAILS
} from "../actions/types";
const INITIAL_STATE = {
  pdata: [],
  error: "",
  success: "",
  loading: false
};

export default function NewsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_NEWS_DETAILS:
      return {
        ...state,
        pdata: action.payload.payload,
        success: "",
        loading: true,
        error: ""
      };
    case GET_NEWS_DETAILS_SUCCESS:
      return {
        ...state,
        pdata: action.payload.payload,
        success: "",
        loading: false,
        error: ""
      };
    case GET_NEWS_DETAILS_ERROR:
      return {
        ...state,
        pdata: [],
        loading: false,
        success: "",
        error: ""
      };
    case CLEAR_NEWS_DETAILS:
      return {
        ...state,
        pdata: [],
        loading: false,
        success: "",
        error: ""
      };
    default:
      return state;
  }
}
