import { NewsState } from "../../types";
import { HealthActions } from "../types/healthTypes";

const initialState: NewsState = {
	data: [],
	error: null,
	isLoading: true,
	isLoadingMore: false,
	currentPage: 0,
	hasMorePage: true,
	lastOffset: 0,
};

const healthReducer = (
	state = initialState,
	action: HealthActions
): NewsState => {
	switch (action.type) {
		case "FETCH_HEALTH_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_HEALTH_MORE_LOADING":
			return {
				...state,
				isLoadingMore: true,
			};
		case "FETCH_HEALTH_SUCCESS":
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
		case "FETCH_HEALTH_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "HANDLE_SCROLL_HEALTH":
			return {
				...state,
				lastOffset: action.payload,
			};
		default:
			return state;
	}
};

export default healthReducer;
