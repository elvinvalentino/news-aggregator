import { combineReducers } from "redux";
import BottomSheetReducer from "./bottomSheetReducer";
import SnackbarReducer from "./snackbarReducer";
import BusinessReducer from "./businessReducer";
import EntertainmentReducer from "./entertainmentReducer";
import ScienceReducer from "./scienceReducer";
import HealthReducer from "./healthReducer";
import SportReducer from "./sportReducer";
import TechnologyReducer from "./technologyReducer";
import GeneralReducer from "./generalReducer";

export default combineReducers({
	bottomSheet: BottomSheetReducer,
	snackbar: SnackbarReducer,
	business: BusinessReducer,
	entertainment: EntertainmentReducer,
	science: ScienceReducer,
	health: HealthReducer,
	sport: SportReducer,
	technology: TechnologyReducer,
	general: GeneralReducer,
});
