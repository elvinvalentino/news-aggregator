import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { rootState, TabContentProps } from "../../types";
import {
	initialFetch,
	handleScrollBusiness,
} from "../../redux/actions/businessActions";
import NewsCard from "../../components/NewsCard";
import { useScroll } from "../../hooks";

const Business: React.FC<TabContentProps> = ({ isActive }) => {
	const { data, isLoading, lastScrollOffset } = useSelector(
		(state: rootState) => state.business
	);
	const dispatch = useDispatch();

	const handleScroll = useCallback(() => {
		const offset = window.pageYOffset;
		console.log("scrolled event");

		dispatch(handleScrollBusiness(offset));
	}, [dispatch]);

	useScroll(isActive, lastScrollOffset, handleScroll);

	useEffect(() => {
		dispatch(initialFetch());
	}, [dispatch]);

	if (isLoading) return <h1>Loading</h1>;

	return (
		<div>
			{data?.articles.map(article => (
				<NewsCard article={article} />
			))}
		</div>
	);
};

export default Business;
