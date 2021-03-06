import React, { memo } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

import Card from "../Card";
import CardContent from "../CardContent";

interface IProps {
	length?: number;
}

const NewsSkeleton: React.FC<IProps> = ({ length = 20 }) => {
	return (
		<>
			{[...Array(length)].map((_, idx) => (
				<Grid key={idx} item style={{ width: "100%" }}>
					<Card>
						<Skeleton
							variant="rect"
							animation="wave"
							width={100}
							height={170}
							style={{ flexShrink: 0 }}
						/>
						<CardContent>
							<Skeleton
								variant="rect"
								animation="wave"
								width="100%"
								height={20}
								style={{ marginTop: ".5em" }}
							/>
							<Skeleton
								variant="rect"
								animation="wave"
								width={110}
								height={10}
								style={{ marginTop: "1em" }}
							/>
							<Skeleton
								variant="rect"
								animation="wave"
								width={90}
								height={10}
								style={{ marginTop: ".5em" }}
							/>
							<Skeleton
								variant="rect"
								animation="wave"
								width="100%"
								height={10}
								style={{ marginTop: "1em" }}
							/>
							<Skeleton
								variant="rect"
								animation="wave"
								width="100%"
								height={10}
								style={{ marginTop: ".5em" }}
							/>
							<Skeleton
								variant="rect"
								animation="wave"
								width={100}
								height={10}
								style={{ marginTop: "1em" }}
							/>
						</CardContent>
					</Card>
				</Grid>
			))}
		</>
	);
};

export default memo(NewsSkeleton);
