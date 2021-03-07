import { NewsState } from "../../types";
import { SportActions } from "../types/sportTypes";

const initialState: NewsState = {
	data: [],
	error: null,
	isLoading: true,
	isLoadingMore: false,
	currentPage: 0,
	hasMorePage: true,
	lastOffset: 0,
};

const sportReducer = (
	state = initialState,
	action: SportActions
): NewsState => {
	switch (action.type) {
		case "FETCH_SPORT_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_SPORT_MORE_LOADING":
			return {
				...state,
				isLoadingMore: true,
			};
		case "FETCH_SPORT_SUCCESS":
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
		case "FETCH_SPORT_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "HANDLE_SCROLL_SPORT":
			return {
				...state,
				lastOffset: action.payload,
			};
		default:
			return state;
	}
};

export default sportReducer;
