import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import rootReducer from "../redux/reducers";

export interface TabContentProps {
	isActive: boolean;
}

export interface ArticleSource {
	id: string;
	name: string;
}

export interface Article {
	source: ArticleSource;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: Date;
	content: string;
}

export interface NewsResponse {
	status: "ok";
	totalResults: number;
	articles: Article[];
}

export interface NewsResponseError {
	status: "error";
	code: string;
	message: string;
}

export interface ReducerState {
	data: NewsResponse | null;
	isLoading: boolean;
	isError: boolean;
	error: NewsResponseError | null;
	currentPage: number;
	hasMorePage: boolean;
}

export type ThunkResult<R, A extends Action<any>> = ThunkAction<
	R,
	rootState,
	undefined,
	A
>;

export type rootState = ReturnType<typeof rootReducer>;
