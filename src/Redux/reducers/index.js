import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";
import NewsSelectedReducer from "./NewsSelectedReducer";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  toastr: toastrReducer,
  NewsReducer,
  NewsSelectedReducer
});
