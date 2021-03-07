import { combineReducers } from "redux";
import BottomSheetReducer from "./bottomSheetReducer";
import BusinessReducer from "./businessReducer";
import EntertainmentReducer from "./entertainmentReducer";

export default combineReducers({
	bottomSheet: BottomSheetReducer,
	business: BusinessReducer,
	entertainment: EntertainmentReducer,
});
