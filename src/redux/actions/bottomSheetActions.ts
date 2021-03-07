import { Article, ThunkResult } from "../../types";
import {
	ArticleSelectedAction,
	BottomSheetActions,
} from "../types/bottomSheetTypes";

export const articleSelected = (article: Article): ArticleSelectedAction => ({
	type: "ARTICLE_SELECTED",
	payload: article,
});

export const bottomSheetClose = (): ThunkResult<
	void,
	BottomSheetActions
> => dispatch => {
	dispatch({ type: "BOTTOM_SHEET_CLOSE" });
	setTimeout(() => dispatch({ type: "CLEAR_SELECTED_ARTICLE" }), 450);
};
