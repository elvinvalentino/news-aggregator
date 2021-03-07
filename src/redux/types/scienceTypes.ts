import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_SCIENCE = "FETCH_SCIENCE";
export const FETCH_SCIENCE_LOADING = "FETCH_SCIENCE_LOADING";
export const FETCH_SCIENCE_SUCCESS = "FETCH_SCIENCE_SUCCESS";
export const FETCH_SCIENCE_MORE = "FETCH_SCIENCE_MORE";
export const FETCH_SCIENCE_MORE_LOADING = "FETCH_SCIENCE_MORE_LOADING";
export const FETCH_SCIENCE_ERROR = "FETCH_SCIENCE_ERROR";
export const HANDLE_SCROLL_SCIENCE = "HANDLE_SCROLL_SCIENCE";

export interface FetchScienceAction {
	type: typeof FETCH_SCIENCE;
}

export interface FetchScienceLoadingAction {
	type: typeof FETCH_SCIENCE_LOADING;
}

export interface FetchScienceSuccessAction {
	type: typeof FETCH_SCIENCE_SUCCESS;
	payload: NewsResponse;
}

export interface FetchScienceMoreAction {
	type: typeof FETCH_SCIENCE_MORE;
}

export interface FetchScienceMoreLoadingAction {
	type: typeof FETCH_SCIENCE_MORE_LOADING;
}

export interface FetchScienceErrorAction {
	type: typeof FETCH_SCIENCE_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollScienceAction {
	type: typeof HANDLE_SCROLL_SCIENCE;
	payload: number;
}

export type ScienceActions =
	| FetchScienceAction
	| FetchScienceLoadingAction
	| FetchScienceSuccessAction
	| FetchScienceMoreAction
	| FetchScienceMoreLoadingAction
	| FetchScienceErrorAction
	| HandleScrollScienceAction;
