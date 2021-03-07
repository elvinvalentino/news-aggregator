import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	initialFetch,
	fetchScienceMore,
} from "../redux/actions/scienceActions";
import { showSnackbar } from "../redux/actions/snackbarActions";
import { RootState } from "../types";

export const useFetchScience = () => {
	const science = useSelector((state: RootState) => state.science);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (science.hasMorePage && !science.isLoading && !science.error)
				dispatch(fetchScienceMore());
		}
	}, [dispatch, science.hasMorePage, science.isLoading, science.error]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (science.data.length === 0) {
			dispatch(initialFetch());
		}
	}, [dispatch, science.data.length]);

	useEffect(() => {
		if (science.error) {
			dispatch(showSnackbar("error", science.error.message));
		}
	}, [science.error, dispatch]);

	return science;
};
