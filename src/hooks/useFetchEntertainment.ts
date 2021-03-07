import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	initialFetch,
	fetchEntertainmentMore,
} from "../redux/actions/entertainmentActions";
import { RootState } from "../types";

export const useFetchEntertainment = () => {
	const entertainment = useSelector((state: RootState) => state.entertainment);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (entertainment.hasMorePage && !entertainment.isLoading)
				dispatch(fetchEntertainmentMore());
		}
	}, [dispatch, entertainment.hasMorePage, entertainment.isLoading]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (entertainment.data.length === 0) {
			console.log("fetch");
			dispatch(initialFetch());
		}
	}, [dispatch, entertainment.data.length]);

	return entertainment;
};
