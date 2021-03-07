import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import { HealthActions, HandleScrollHealthAction } from "../types/healthTypes";

export const initialFetch = (): ThunkResult<
	void,
	HealthActions
> => async dispatch => {
	dispatch({ type: "FETCH_HEALTH_LOADING" });
	dispatch(fetchHealth());
};

export const fetchHealthMore = (): ThunkResult<
	void,
	HealthActions
> => dispatch => {
	dispatch({ type: "FETCH_HEALTH_MORE_LOADING" });
	dispatch(fetchHealth());
};

export const fetchHealth = (): ThunkResult<void, HealthActions> => async (
	dispatch,
	getState
) => {
	const {
		health: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=health&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_HEALTH_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_HEALTH_ERROR",
			payload: err,
		});
	}
};

export const handleScrollHealth = (
	offset: number
): HandleScrollHealthAction => ({
	type: "HANDLE_SCROLL_HEALTH",
	payload: offset,
});
