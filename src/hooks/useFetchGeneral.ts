import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	initialFetch,
	fetchGeneralMore,
} from "../redux/actions/generalActions";
import { showSnackbar } from "../redux/actions/snackbarActions";
import { RootState } from "../types";

export const useFetchGeneral = () => {
	const general = useSelector((state: RootState) => state.general);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (general.hasMorePage && !general.isLoading && !general.error)
				dispatch(fetchGeneralMore());
		}
	}, [dispatch, general.hasMorePage, general.isLoading, general.error]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (general.data.length === 0) {
			dispatch(initialFetch());
		}
	}, [dispatch, general.data.length]);

	useEffect(() => {
		if (general.error) {
			dispatch(showSnackbar("error", general.error.message));
		}
	}, [general.error, dispatch]);

	return general;
};
