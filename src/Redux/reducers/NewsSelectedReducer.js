import {
  GET_NEWS_SELECTED_SUCCESS,
  GET_NEWS_SELECTED_ERROR
} from "../actions/types";
const INITIAL_STATE = {
  newsSelecteddata: [],
  error: "",
  success: "",
  loading: false
};

export default function NewsSelectedReducer(
  state = INITIAL_STATE,
  action = {}
) {
  switch (action.type) {
    case GET_NEWS_SELECTED_SUCCESS:
      return {
        ...state,
        newsSelecteddata: action.payload.payload,
        success: "",
        loading: false,
        error: ""
      };
    case GET_NEWS_SELECTED_ERROR:
      return {
        ...state,
        newsSelecteddata: [],
        loading: false,
        success: "",
        error: ""
      };
    default:
      return state;
  }
}
