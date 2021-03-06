import { Article } from "../../types";
import {
	ArticleSelectedAction,
	BottomSheetCloseAction,
} from "../types/bottomSheetTypes";

export const articleSelected = (article: Article): ArticleSelectedAction => ({
	type: "ARTICLE_SELECTED",
	payload: article,
});

export const bottomSheetClose = (): BottomSheetCloseAction => ({
	type: "BOTTOM_SHEET_CLOSE",
});
