import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import { SportActions, HandleScrollSportAction } from "../types/sportTypes";

export const initialFetch = (): ThunkResult<
	void,
	SportActions
> => async dispatch => {
	dispatch({ type: "FETCH_SPORT_LOADING" });
	dispatch(fetchSport());
};

export const fetchSportMore = (): ThunkResult<
	void,
	SportActions
> => dispatch => {
	dispatch({ type: "FETCH_SPORT_MORE_LOADING" });
	dispatch(fetchSport());
};

export const fetchSport = (): ThunkResult<void, SportActions> => async (
	dispatch,
	getState
) => {
	const {
		sport: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=sport&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_SPORT_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_SPORT_ERROR",
			payload: err,
		});
	}
};

export const handleScrollSport = (offset: number): HandleScrollSportAction => ({
	type: "HANDLE_SCROLL_SPORT",
	payload: offset,
});
