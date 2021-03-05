import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import { BusinessActions } from "../types/businessTypes";

export const initialFetch = (): ThunkResult<
	void,
	BusinessActions
> => async dispatch => {
	dispatch({ type: "FETCH_BUSINESS_LOADING" });
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
			`/top-headlines?category=business&page=${currentPage + 1}`
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
