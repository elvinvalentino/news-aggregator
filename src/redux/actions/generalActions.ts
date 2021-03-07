import axios from "../../axios";
import { NewsResponse, ThunkResult } from "../../types";
import {
	GeneralActions,
	HandleScrollGeneralAction,
} from "../types/generalTypes";

export const initialFetch = (): ThunkResult<
	void,
	GeneralActions
> => async dispatch => {
	dispatch({ type: "FETCH_GENERAL_LOADING" });
	dispatch(fetchGeneral());
};

export const fetchGeneralMore = (): ThunkResult<
	void,
	GeneralActions
> => dispatch => {
	dispatch({ type: "FETCH_GENERAL_MORE_LOADING" });
	dispatch(fetchGeneral());
};

export const fetchGeneral = (): ThunkResult<void, GeneralActions> => async (
	dispatch,
	getState
) => {
	const {
		general: { currentPage },
	} = getState();
	try {
		const { data } = await axios.get<NewsResponse>(
			`/top-headlines?category=general&country=id&page=${currentPage + 1}`
		);
		dispatch({
			type: "FETCH_GENERAL_SUCCESS",
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: "FETCH_GENERAL_ERROR",
			payload: err,
		});
	}
};

export const handleScrollGeneral = (
	offset: number
): HandleScrollGeneralAction => ({
	type: "HANDLE_SCROLL_GENERAL",
	payload: offset,
});
