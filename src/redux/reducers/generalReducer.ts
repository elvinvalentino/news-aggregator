import { NewsState } from "../../types";
import { GeneralActions } from "../types/generalTypes";

const initialState: NewsState = {
	data: [],
	error: null,
	isLoading: true,
	isLoadingMore: false,
	currentPage: 0,
	hasMorePage: true,
	lastOffset: 0,
};

const generalReducer = (
	state = initialState,
	action: GeneralActions
): NewsState => {
	switch (action.type) {
		case "FETCH_GENERAL_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_GENERAL_MORE_LOADING":
			return {
				...state,
				isLoadingMore: true,
			};
		case "FETCH_GENERAL_SUCCESS":
			return {
				...state,
				isLoading: false,
				isLoadingMore: false,
				error: null,
				data: [...state.data, ...action.payload.articles],
				currentPage: state.currentPage + 1,
				hasMorePage:
					action.payload.articles.length + state.data.length <
					action.payload.totalResults,
			};
		case "FETCH_GENERAL_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "HANDLE_SCROLL_GENERAL":
			return {
				...state,
				lastOffset: action.payload,
			};
		default:
			return state;
	}
};

export default generalReducer;
