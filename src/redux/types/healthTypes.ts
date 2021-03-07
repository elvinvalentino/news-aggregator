import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_HEALTH = "FETCH_HEALTH";
export const FETCH_HEALTH_LOADING = "FETCH_HEALTH_LOADING";
export const FETCH_HEALTH_SUCCESS = "FETCH_HEALTH_SUCCESS";
export const FETCH_HEALTH_MORE = "FETCH_HEALTH_MORE";
export const FETCH_HEALTH_MORE_LOADING = "FETCH_HEALTH_MORE_LOADING";
export const FETCH_HEALTH_ERROR = "FETCH_HEALTH_ERROR";
export const HANDLE_SCROLL_HEALTH = "HANDLE_SCROLL_HEALTH";

export interface FetchHealthAction {
	type: typeof FETCH_HEALTH;
}

export interface FetchHealthLoadingAction {
	type: typeof FETCH_HEALTH_LOADING;
}

export interface FetchHealthSuccessAction {
	type: typeof FETCH_HEALTH_SUCCESS;
	payload: NewsResponse;
}

export interface FetchHealthMoreAction {
	type: typeof FETCH_HEALTH_MORE;
}

export interface FetchHealthMoreLoadingAction {
	type: typeof FETCH_HEALTH_MORE_LOADING;
}

export interface FetchHealthErrorAction {
	type: typeof FETCH_HEALTH_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollHealthAction {
	type: typeof HANDLE_SCROLL_HEALTH;
	payload: number;
}

export type HealthActions =
	| FetchHealthAction
	| FetchHealthLoadingAction
	| FetchHealthSuccessAction
	| FetchHealthMoreAction
	| FetchHealthMoreLoadingAction
	| FetchHealthErrorAction
	| HandleScrollHealthAction;
