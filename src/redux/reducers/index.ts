import { combineReducers } from "redux";
import BusinessReducer from "./businessReducer";

export default combineReducers({
	business: BusinessReducer,
});
