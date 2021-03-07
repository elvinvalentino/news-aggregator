import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initialFetch, fetchSportMore } from "../redux/actions/sportActions";
import { showSnackbar } from "../redux/actions/snackbarActions";
import { RootState } from "../types";

export const useFetchSport = () => {
	const sport = useSelector((state: RootState) => state.sport);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (sport.hasMorePage && !sport.isLoading && !sport.error)
				dispatch(fetchSportMore());
		}
	}, [dispatch, sport.hasMorePage, sport.isLoading, sport.error]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (sport.data.length === 0) {
			dispatch(initialFetch());
		}
	}, [dispatch, sport.data.length]);

	useEffect(() => {
		if (sport.error) {
			dispatch(showSnackbar("error", sport.error.message));
		}
	}, [sport.error, dispatch]);

	return sport;
};
