import { combineReducers } from "redux";
import BottomSheetReducer from "./bottomSheetReducer";
import SnackbarReducer from "./snackbarReducer";
import BusinessReducer from "./businessReducer";
import EntertainmentReducer from "./entertainmentReducer";

export default combineReducers({
	bottomSheet: BottomSheetReducer,
	snackbar: SnackbarReducer,
	business: BusinessReducer,
	entertainment: EntertainmentReducer,
});
