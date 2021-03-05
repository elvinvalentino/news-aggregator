import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { rootState, TabContentProps } from "../../types";
import { initialFetch } from "../../redux/actions/businessActions";
import NewsCard from "../../components/NewsCard";
import { useScroll } from "../../hooks";

const Business: React.FC<TabContentProps> = ({ isActive }) => {
	const { data, isLoading } = useSelector((state: rootState) => state.business);
	const dispatch = useDispatch();

	useScroll(isActive);

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
