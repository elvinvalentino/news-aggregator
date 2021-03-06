import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_BUSINESS = "FETCH_BUSINESS";
export const FETCH_BUSINESS_LOADING = "FETCH_BUSINESS_LOADING";
export const FETCH_BUSINESS_SUCCESS = "FETCH_BUSINESS_SUCCESS";
export const FETCH_BUSINESS_MORE = "FETCH_BUSINESS_MORE";
export const FETCH_BUSINESS_MORE_LOADING = "FETCH_BUSINESS_MORE_LOADING";
export const FETCH_BUSINESS_ERROR = "FETCH_BUSINESS_ERROR";
export const HANDLE_SCROLL_BUSINESS = "HANDLE_SCROLL_BUSINESS";

export interface FetchBusinessAction {
	type: typeof FETCH_BUSINESS;
}

export interface FetchBusinessLoadingAction {
	type: typeof FETCH_BUSINESS_LOADING;
}

export interface FetchBusinessSuccessAction {
	type: typeof FETCH_BUSINESS_SUCCESS;
	payload: NewsResponse;
}

export interface FetchBusinessMoreAction {
	type: typeof FETCH_BUSINESS_MORE;
}

export interface FetchBusinessMoreLoadingAction {
	type: typeof FETCH_BUSINESS_MORE_LOADING;
}

export interface FetchBusinessErrorAction {
	type: typeof FETCH_BUSINESS_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollBusinessAction {
	type: typeof HANDLE_SCROLL_BUSINESS;
	payload: number;
}

export type BusinessActions =
	| FetchBusinessAction
	| FetchBusinessLoadingAction
	| FetchBusinessSuccessAction
	| FetchBusinessMoreAction
	| FetchBusinessMoreLoadingAction
	| FetchBusinessErrorAction
	| HandleScrollBusinessAction;
