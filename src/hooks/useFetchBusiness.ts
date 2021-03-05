import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initialFetch } from "../redux/actions/businessActions";
import { RootState } from "../types";

export const useFetchBusiness = () => {
	const business = useSelector((state: RootState) => state.business);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!business.data) {
			console.log("fetch");
			dispatch(initialFetch());
		}
	}, [dispatch, business.data]);

	return business;
};
