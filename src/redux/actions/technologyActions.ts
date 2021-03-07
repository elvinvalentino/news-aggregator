import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import {
	TechnologyActions,
	HandleScrollTechnologyAction,
} from "../types/technologyTypes";

export const initialFetch = (): ThunkResult<
	void,
	TechnologyActions
> => async dispatch => {
	dispatch({ type: "FETCH_TECHNOLOGY_LOADING" });
	dispatch(fetchTechnology());
};

export const fetchTechnologyMore = (): ThunkResult<
	void,
	TechnologyActions
> => dispatch => {
	dispatch({ type: "FETCH_TECHNOLOGY_MORE_LOADING" });
	dispatch(fetchTechnology());
};

export const fetchTechnology = (): ThunkResult<
	void,
	TechnologyActions
> => async (dispatch, getState) => {
	const {
		technology: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=technology&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_TECHNOLOGY_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_TECHNOLOGY_ERROR",
			payload: err,
		});
	}
};

export const handleScrollTechnology = (
	offset: number
): HandleScrollTechnologyAction => ({
	type: "HANDLE_SCROLL_TECHNOLOGY",
	payload: offset,
});
