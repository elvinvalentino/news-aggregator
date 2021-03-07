import { NewsState } from "../../types";
import { ScienceActions } from "../types/scienceTypes";

const initialState: NewsState = {
	data: [],
	error: null,
	isLoading: true,
	isLoadingMore: false,
	currentPage: 0,
	hasMorePage: true,
	lastOffset: 0,
};

const scienceReducer = (
	state = initialState,
	action: ScienceActions
): NewsState => {
	switch (action.type) {
		case "FETCH_SCIENCE_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_SCIENCE_MORE_LOADING":
			return {
				...state,
				isLoadingMore: true,
			};
		case "FETCH_SCIENCE_SUCCESS":
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
		case "FETCH_SCIENCE_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "HANDLE_SCROLL_SCIENCE":
			return {
				...state,
				lastOffset: action.payload,
			};
		default:
			return state;
	}
};

export default scienceReducer;
