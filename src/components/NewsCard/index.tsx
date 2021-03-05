import React, { memo } from "react";

import { Card, CardImage, CardContent, NewsTitle } from "./components";
import { Article } from "../../types";

interface IProps {
	article: Article;
}

const NewsCard: React.FC<IProps> = ({ article }) => {
	return (
		<Card>
			<CardImage src={article.urlToImage} />
			<CardContent>
				<NewsTitle>{article.title}</NewsTitle>
			</CardContent>
		</Card>
	);
};

export default memo(NewsCard);
