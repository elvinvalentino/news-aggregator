import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import {
	ScienceActions,
	HandleScrollScienceAction,
} from "../types/scienceTypes";

export const initialFetch = (): ThunkResult<
	void,
	ScienceActions
> => async dispatch => {
	dispatch({ type: "FETCH_SCIENCE_LOADING" });
	dispatch(fetchScience());
};

export const fetchScienceMore = (): ThunkResult<
	void,
	ScienceActions
> => dispatch => {
	dispatch({ type: "FETCH_SCIENCE_MORE_LOADING" });
	dispatch(fetchScience());
};

export const fetchScience = (): ThunkResult<void, ScienceActions> => async (
	dispatch,
	getState
) => {
	const {
		science: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=science&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_SCIENCE_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_SCIENCE_ERROR",
			payload: err,
		});
	}
};

export const handleScrollScience = (
	offset: number
): HandleScrollScienceAction => ({
	type: "HANDLE_SCROLL_SCIENCE",
	payload: offset,
});
