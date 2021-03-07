import { SnackbarState, SnackbarActions } from "../types/snackbarTypes";

const initialState: SnackbarState = {
	isOpen: false,
	message: null,
	severity: "success",
};

const snackbarReducer = (
	state = initialState,
	action: SnackbarActions
): SnackbarState => {
	switch (action.type) {
		case "SHOW_SNACKBAR":
			return {
				...state,
				isOpen: true,
				message: action.payload.message,
				severity: action.payload.severity,
			};
		case "CLOSE_SNACKBAR":
			return {
				...state,
				isOpen: false,
			};
		case "CLEAR_MESSAGE":
			return {
				...state,
				message: null,
			};
		default:
			return state;
	}
};

export default snackbarReducer;
