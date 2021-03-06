import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import rootReducer from "../redux/reducers";

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
	publishedAt: string;
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

export interface NewsState {
	data: Article[];
	isLoading: boolean;
	isLoadingMore: boolean;
	error: NewsResponseError | null;
	currentPage: number;
	hasMorePage: boolean;
	lastOffset: number;
}

export type ThunkResult<R, A extends Action<any>> = ThunkAction<
	R,
	RootState,
	undefined,
	A
>;

export type RootState = ReturnType<typeof rootReducer>;
