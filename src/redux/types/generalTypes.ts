import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_GENERAL = "FETCH_GENERAL";
export const FETCH_GENERAL_LOADING = "FETCH_GENERAL_LOADING";
export const FETCH_GENERAL_SUCCESS = "FETCH_GENERAL_SUCCESS";
export const FETCH_GENERAL_MORE = "FETCH_GENERAL_MORE";
export const FETCH_GENERAL_MORE_LOADING = "FETCH_GENERAL_MORE_LOADING";
export const FETCH_GENERAL_ERROR = "FETCH_GENERAL_ERROR";
export const HANDLE_SCROLL_GENERAL = "HANDLE_SCROLL_GENERAL";

export interface FetchGeneralAction {
	type: typeof FETCH_GENERAL;
}

export interface FetchGeneralLoadingAction {
	type: typeof FETCH_GENERAL_LOADING;
}

export interface FetchGeneralSuccessAction {
	type: typeof FETCH_GENERAL_SUCCESS;
	payload: NewsResponse;
}

export interface FetchGeneralMoreAction {
	type: typeof FETCH_GENERAL_MORE;
}

export interface FetchGeneralMoreLoadingAction {
	type: typeof FETCH_GENERAL_MORE_LOADING;
}

export interface FetchGeneralErrorAction {
	type: typeof FETCH_GENERAL_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollGeneralAction {
	type: typeof HANDLE_SCROLL_GENERAL;
	payload: number;
}

export type GeneralActions =
	| FetchGeneralAction
	| FetchGeneralLoadingAction
	| FetchGeneralSuccessAction
	| FetchGeneralMoreAction
	| FetchGeneralMoreLoadingAction
	| FetchGeneralErrorAction
	| HandleScrollGeneralAction;
