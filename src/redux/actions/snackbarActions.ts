import {
	AlertSeverity,
	CloseSnackbarAction,
	ShowSnackBarAction,
} from "../types/snackbarTypes";

export const showSnackbar = (
	severity: AlertSeverity,
	message: string
): ShowSnackBarAction => ({
	type: "SHOW_SNACKBAR",
	payload: {
		message: message,
		severity: severity,
	},
});

export const closeSnackbar = (): CloseSnackbarAction => ({
	type: "CLOSE_SNACKBAR",
});
