import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	initialFetch,
	fetchTechnologyMore,
} from "../redux/actions/technologyActions";
import { showSnackbar } from "../redux/actions/snackbarActions";
import { RootState } from "../types";

export const useFetchTechnology = () => {
	const technology = useSelector((state: RootState) => state.technology);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (technology.hasMorePage && !technology.isLoading && !technology.error)
				dispatch(fetchTechnologyMore());
		}
	}, [
		dispatch,
		technology.hasMorePage,
		technology.isLoading,
		technology.error,
	]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (technology.data.length === 0) {
			dispatch(initialFetch());
		}
	}, [dispatch, technology.data.length]);

	useEffect(() => {
		if (technology.error) {
			dispatch(showSnackbar("error", technology.error.message));
		}
	}, [technology.error, dispatch]);

	return technology;
};
