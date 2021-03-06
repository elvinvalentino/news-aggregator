import { ReducerState } from "../../types";
import { BusinessActions } from "../types/businessTypes";

const initialState: ReducerState = {
	data: [],
	error: null,
	isLoading: true,
	isLoadingMore: false,
	currentPage: 0,
	hasMorePage: true,
	lastOffset: 0,
};

const BusinessReducer = (
	state = initialState,
	action: BusinessActions
): ReducerState => {
	switch (action.type) {
		case "FETCH_BUSINESS_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "FETCH_BUSINESS_MORE_LOADING":
			return {
				...state,
				isLoadingMore: true,
			};
		case "FETCH_BUSINESS_SUCCESS":
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
		case "FETCH_BUSINESS_ERROR":
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case "HANDLE_SCROLL_BUSINESS":
			return {
				...state,
				lastOffset: action.payload,
			};
		default:
			return state;
	}
};

export default BusinessReducer;
