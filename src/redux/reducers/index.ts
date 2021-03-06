import { combineReducers } from "redux";
import BottomSheetReducer from "./bottomSheetReducer";
import BusinessReducer from "./businessReducer";

export default combineReducers({
	bottomSheet: BottomSheetReducer,
	business: BusinessReducer,
});
