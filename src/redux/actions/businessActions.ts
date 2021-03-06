import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import {
	BusinessActions,
	HandleScrollBusinessAction,
} from "../types/businessTypes";

export const initialFetch = (): ThunkResult<
	void,
	BusinessActions
> => async dispatch => {
	dispatch({ type: "FETCH_BUSINESS_LOADING" });
	dispatch(fetchBusiness());
};

export const fetchBusinessMore = (): ThunkResult<
	void,
	BusinessActions
> => dispatch => {
	dispatch({ type: "FETCH_BUSINESS_MORE_LOADING" });
	dispatch(fetchBusiness());
};

export const fetchBusiness = (): ThunkResult<void, BusinessActions> => async (
	dispatch,
	getState
) => {
	const {
		business: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=business&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_BUSINESS_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_BUSINESS_ERROR",
			payload: err,
		});
	}
};

export const handleScrollBusiness = (
	offset: number
): HandleScrollBusinessAction => ({
	type: "HANDLE_SCROLL_BUSINESS",
	payload: offset,
});
