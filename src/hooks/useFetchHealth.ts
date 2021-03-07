import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initialFetch, fetchHealthMore } from "../redux/actions/healthActions";
import { showSnackbar } from "../redux/actions/snackbarActions";
import { RootState } from "../types";

export const useFetchHealth = () => {
	const health = useSelector((state: RootState) => state.health);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (health.hasMorePage && !health.isLoading && !health.error)
				dispatch(fetchHealthMore());
		}
	}, [dispatch, health.hasMorePage, health.isLoading, health.error]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (health.data.length === 0) {
			dispatch(initialFetch());
		}
	}, [dispatch, health.data.length]);

	useEffect(() => {
		if (health.error) {
			dispatch(showSnackbar("error", health.error.message));
		}
	}, [health.error, dispatch]);

	return health;
};
