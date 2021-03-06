import {
	BottomSheetActions,
	BottomSheetState,
} from "../types/bottomSheetTypes";

const initialState: BottomSheetState = {
	isOpen: false,
	selectedArticle: null,
};

const BottomSheetReducer = (
	state = initialState,
	action: BottomSheetActions
): BottomSheetState => {
	switch (action.type) {
		case "ARTICLE_SELECTED":
			return {
				...state,
				isOpen: true,
				selectedArticle: action.payload,
			};
		case "BOTTOM_SHEET_CLOSE":
			return {
				...state,
				isOpen: false,
				selectedArticle: null,
			};
		default:
			return state;
	}
};

export default BottomSheetReducer;
