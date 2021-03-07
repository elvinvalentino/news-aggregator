import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_TECHNOLOGY = "FETCH_TECHNOLOGY";
export const FETCH_TECHNOLOGY_LOADING = "FETCH_TECHNOLOGY_LOADING";
export const FETCH_TECHNOLOGY_SUCCESS = "FETCH_TECHNOLOGY_SUCCESS";
export const FETCH_TECHNOLOGY_MORE = "FETCH_TECHNOLOGY_MORE";
export const FETCH_TECHNOLOGY_MORE_LOADING = "FETCH_TECHNOLOGY_MORE_LOADING";
export const FETCH_TECHNOLOGY_ERROR = "FETCH_TECHNOLOGY_ERROR";
export const HANDLE_SCROLL_TECHNOLOGY = "HANDLE_SCROLL_TECHNOLOGY";

export interface FetchTechnologyAction {
	type: typeof FETCH_TECHNOLOGY;
}

export interface FetchTechnologyLoadingAction {
	type: typeof FETCH_TECHNOLOGY_LOADING;
}

export interface FetchTechnologySuccessAction {
	type: typeof FETCH_TECHNOLOGY_SUCCESS;
	payload: NewsResponse;
}

export interface FetchTechnologyMoreAction {
	type: typeof FETCH_TECHNOLOGY_MORE;
}

export interface FetchTechnologyMoreLoadingAction {
	type: typeof FETCH_TECHNOLOGY_MORE_LOADING;
}

export interface FetchTechnologyErrorAction {
	type: typeof FETCH_TECHNOLOGY_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollTechnologyAction {
	type: typeof HANDLE_SCROLL_TECHNOLOGY;
	payload: number;
}

export type TechnologyActions =
	| FetchTechnologyAction
	| FetchTechnologyLoadingAction
	| FetchTechnologySuccessAction
	| FetchTechnologyMoreAction
	| FetchTechnologyMoreLoadingAction
	| FetchTechnologyErrorAction
	| HandleScrollTechnologyAction;
