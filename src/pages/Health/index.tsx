import React, { memo } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import NewsCard from "../../components/NewsCard";
import NewsSkeleton from "../../components/NewsSkeleton";
import { handleScrollHealth } from "../../redux/actions/healthActions";
import { useScroll } from "../../hooks";
import { useFetchHealth } from "../../hooks";

const Health: React.FC = () => {
	const {
		data,
		isLoading,
		isLoadingMore,
		lastOffset,
		error,
	} = useFetchHealth();

	useScroll(lastOffset, handleScrollHealth);

	return (
		<Box px={2}>
			<Grid container spacing={3} direction="column">
				{(isLoading || error) && <NewsSkeleton />}
				{!isLoading &&
					data.map((article, idx) => (
						<Grid key={idx} item style={{ width: "100%" }}>
							<NewsCard key={idx} article={article} />
						</Grid>
					))}
				{isLoadingMore && (
					<Grid container item justify="center" style={{ width: "100%" }}>
						<CircularProgress />
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

export default memo(Health);
