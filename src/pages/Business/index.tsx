import React, { memo } from "react";

import { TabContentProps } from "../../types";
import { handleScrollBusiness } from "../../redux/actions/businessActions";
import Box from "@material-ui/core/Box";

import NewsCard from "../../components/NewsCard";
import { useScroll } from "../../hooks";
import { useFetchBusiness } from "../../hooks/useFetchBusiness";

const Business: React.FC<TabContentProps> = ({ isActive }) => {
	const { data, isLoading, lastOffset, error } = useFetchBusiness();

	useScroll(isActive, lastOffset, handleScrollBusiness);

	if (error) return <h1>{error.message}</h1>;
	if (isLoading) return <h1>Loadasdasdasing</h1>;

	return (
		<Box px={2}>
			{data &&
				data.articles.map((article, idx) => (
					<NewsCard key={idx} article={article} />
				))}
		</Box>
	);
};

export default memo(Business);
