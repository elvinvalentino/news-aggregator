import { NewsState } from "../../types";
import { TechnologyActions } from "../types/technologyTypes";

const initialState: NewsState = {
	data: [],
	error: null,
	isLoading: true,
	isLoadingMore: false,
	currentPage: 0,
	hasMorePage: true,
	lastOffset: 0,
};

const technologyReducer = (
	state = initialState,
	action: TechnologyActions
): NewsState => {
	switch (action.type) {
		case "FETCH_TECHNOLOGY_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_TECHNOLOGY_MORE_LOADING":
			return {
				...state,
				isLoadingMore: true,
			};
		case "FETCH_TECHNOLOGY_SUCCESS":
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
		case "FETCH_TECHNOLOGY_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "HANDLE_SCROLL_TECHNOLOGY":
			return {
				...state,
				lastOffset: action.payload,
			};
		default:
			return state;
	}
};

export default technologyReducer;
