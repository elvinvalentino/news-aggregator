import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	initialFetch,
	fetchBusinessMore,
} from "../redux/actions/businessActions";
import { showSnackbar } from "../redux/actions/snackbarActions";
import { RootState } from "../types";

export const useFetchBusiness = () => {
	const business = useSelector((state: RootState) => state.business);
	const dispatch = useDispatch();

	const infiniteScroll = useCallback(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.scrollHeight
		) {
			if (business.hasMorePage && !business.isLoading && !business.error)
				dispatch(fetchBusinessMore());
		}
	}, [dispatch, business.hasMorePage, business.isLoading, business.error]);

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

	useEffect(() => {
		if (business.error) {
			dispatch(showSnackbar("error", business.error.message));
		}
	}, [business.error, dispatch]);

	return business;
};
