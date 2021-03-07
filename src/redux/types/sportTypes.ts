import { NewsResponse, NewsResponseError } from "../../types";

export const FETCH_SPORT = "FETCH_SPORT";
export const FETCH_SPORT_LOADING = "FETCH_SPORT_LOADING";
export const FETCH_SPORT_SUCCESS = "FETCH_SPORT_SUCCESS";
export const FETCH_SPORT_MORE = "FETCH_SPORT_MORE";
export const FETCH_SPORT_MORE_LOADING = "FETCH_SPORT_MORE_LOADING";
export const FETCH_SPORT_ERROR = "FETCH_SPORT_ERROR";
export const HANDLE_SCROLL_SPORT = "HANDLE_SCROLL_SPORT";

export interface FetchSportAction {
	type: typeof FETCH_SPORT;
}

export interface FetchSportLoadingAction {
	type: typeof FETCH_SPORT_LOADING;
}

export interface FetchSportSuccessAction {
	type: typeof FETCH_SPORT_SUCCESS;
	payload: NewsResponse;
}

export interface FetchSportMoreAction {
	type: typeof FETCH_SPORT_MORE;
}

export interface FetchSportMoreLoadingAction {
	type: typeof FETCH_SPORT_MORE_LOADING;
}

export interface FetchSportErrorAction {
	type: typeof FETCH_SPORT_ERROR;
	payload: NewsResponseError;
}

export interface HandleScrollSportAction {
	type: typeof HANDLE_SCROLL_SPORT;
	payload: number;
}

export type SportActions =
	| FetchSportAction
	| FetchSportLoadingAction
	| FetchSportSuccessAction
	| FetchSportMoreAction
	| FetchSportMoreLoadingAction
	| FetchSportErrorAction
	| HandleScrollSportAction;
