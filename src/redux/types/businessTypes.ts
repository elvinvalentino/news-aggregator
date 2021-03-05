import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_BUSINESS = "FETCH_BUSINESS";
export const FETCH_BUSINESS_LOADING = "FETCH_BUSINESS_LOADING";
export const FETCH_BUSINESS_SUCCESS = "FETCH_BUSINESS_SUCCESS";
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

export interface FetchBusinessErrorAction {
	type: typeof FETCH_BUSINESS_ERROR;
	payload: NewsResponseError;
}

export type BusinessActions =
	| FetchBusinessAction
	| FetchBusinessLoadingAction
	| FetchBusinessSuccessAction
	| FetchBusinessErrorAction;
