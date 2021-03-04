import { ReducerState } from "../../types";
import { BusinessActions } from "../types/businessTypes";

const initialState: ReducerState = {
	data: null,
	error: null,
	isLoading: true,
	isError: false,
	currentPage: 0,
	hasMorePage: true,
	lastScrollOffset: 0,
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
		case "FETCH_BUSINESS_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				error: null,
				data: action.payload,
				currentPage: state.currentPage + 1,
			};
		case "FETCH_BUSINESS_ERROR":
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		case "HANDLE_SCROLL_BUSINESS":
			return {
				...state,
				lastScrollOffset: action.payload,
			};
		default:
			return state;
	}
};

export default BusinessReducer;
