import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import {
	EntertainmentActions,
	HandleScrollEntertainmentAction,
} from "../types/entertainmentTypes";

export const initialFetch = (): ThunkResult<
	void,
	EntertainmentActions
> => async dispatch => {
	dispatch({ type: "FETCH_ENTERTAINMENT_LOADING" });
	dispatch(fetchEntertainment());
};

export const fetchEntertainmentMore = (): ThunkResult<
	void,
	EntertainmentActions
> => dispatch => {
	dispatch({ type: "FETCH_ENTERTAINMENT_MORE_LOADING" });
	dispatch(fetchEntertainment());
};

export const fetchEntertainment = (): ThunkResult<
	void,
	EntertainmentActions
> => async (dispatch, getState) => {
	const {
		entertainment: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=entertainment&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_ENTERTAINMENT_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_ENTERTAINMENT_ERROR",
			payload: err,
		});
	}
};

export const handleScrollEntertainment = (
	offset: number
): HandleScrollEntertainmentAction => ({
	type: "HANDLE_SCROLL_ENTERTAINMENT",
	payload: offset,
});
