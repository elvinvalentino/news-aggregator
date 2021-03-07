import { Article } from "../../types";

export const ARTICLE_SELECTED = "ARTICLE_SELECTED";
export const BOTTOM_SHEET_CLOSE = "BOTTOM_SHEET_CLOSE";
export const CLEAR_SELECTED_ARTICLE = "CLEAR_SELECTED_ARTICLE";

export interface BottomSheetState {
	isOpen: boolean;
	selectedArticle: Article | null;
}

export interface ArticleSelectedAction {
	type: typeof ARTICLE_SELECTED;
	payload: Article;
}

export interface BottomSheetCloseAction {
	type: typeof BOTTOM_SHEET_CLOSE;
}

export interface ClearSelectedArticle {
	type: typeof CLEAR_SELECTED_ARTICLE;
}

export type BottomSheetActions =
	| ArticleSelectedAction
	| BottomSheetCloseAction
	| ClearSelectedArticle;
