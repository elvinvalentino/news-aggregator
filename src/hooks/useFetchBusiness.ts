import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	initialFetch,
	fetchBusinessMore,
} from "../redux/actions/businessActions";
import { RootState } from "../types";

export const useFetchBusiness = () => {
	const business = useSelector((state: RootState) => state.business);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (business.hasMorePage && !business.isLoading)
				dispatch(fetchBusinessMore());
		}
	}, [dispatch, business.hasMorePage, business.isLoading]);

	useEffect(() => {
		window.addEventListener("scroll", infiniteScroll);

		return () => window.removeEventListener("scroll", infiniteScroll);
	}, [infiniteScroll]);

	useEffect(() => {
		if (business.data.length === 0) {
			console.log("fetch");
			dispatch(initialFetch());
		}
	}, [dispatch, business.data.length]);

	return business;
};
