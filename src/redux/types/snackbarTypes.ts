export const SHOW_SNACKBAR = "SHOW_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";

export type AlertSeverity = "error" | "warning" | "info" | "success";
export interface SnackbarState {
	isOpen: boolean;
	message: string | null;
	severity: AlertSeverity;
}

export interface ShowSnackbarPayload {
	message: string;
	severity: AlertSeverity;
}

export interface ShowSnackBarAction {
	type: typeof SHOW_SNACKBAR;
	payload: ShowSnackbarPayload;
}

export interface CloseSnackbarAction {
	type: typeof CLOSE_SNACKBAR;
}

export type SnackbarActions = ShowSnackBarAction | CloseSnackbarAction;
