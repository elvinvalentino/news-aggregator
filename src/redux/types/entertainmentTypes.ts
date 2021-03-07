import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_ENTERTAINMENT = "FETCH_ENTERTAINMENT";
export const FETCH_ENTERTAINMENT_LOADING = "FETCH_ENTERTAINMENT_LOADING";
export const FETCH_ENTERTAINMENT_SUCCESS = "FETCH_ENTERTAINMENT_SUCCESS";
export const FETCH_ENTERTAINMENT_MORE = "FETCH_ENTERTAINMENT_MORE";
export const FETCH_ENTERTAINMENT_MORE_LOADING =
	"FETCH_ENTERTAINMENT_MORE_LOADING";
export const FETCH_ENTERTAINMENT_ERROR = "FETCH_ENTERTAINMENT_ERROR";
export const HANDLE_SCROLL_ENTERTAINMENT = "HANDLE_SCROLL_ENTERTAINMENT";

export interface FetchEntertainmentAction {
	type: typeof FETCH_ENTERTAINMENT;
}

export interface FetchEntertainmentLoadingAction {
	type: typeof FETCH_ENTERTAINMENT_LOADING;
}

export interface FetchEntertainmentSuccessAction {
	type: typeof FETCH_ENTERTAINMENT_SUCCESS;
	payload: NewsResponse;
}

export interface FetchEntertainmentMoreAction {
	type: typeof FETCH_ENTERTAINMENT_MORE;
}

export interface FetchEntertainmentMoreLoadingAction {
	type: typeof FETCH_ENTERTAINMENT_MORE_LOADING;
}

export interface FetchEntertainmentErrorAction {
	type: typeof FETCH_ENTERTAINMENT_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollEntertainmentAction {
	type: typeof HANDLE_SCROLL_ENTERTAINMENT;
	payload: number;
}

export type EntertainmentActions =
	| FetchEntertainmentAction
	| FetchEntertainmentLoadingAction
	| FetchEntertainmentSuccessAction
	| FetchEntertainmentMoreAction
	| FetchEntertainmentMoreLoadingAction
	| FetchEntertainmentErrorAction
	| HandleScrollEntertainmentAction;
