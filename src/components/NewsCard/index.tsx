import React from "react";
import { Article } from "../../types";

interface IProps {
	article: Article;
}

const NewsCard: React.FC<IProps> = ({ article }) => {
	return <>{article.title}</>;
};

export default NewsCard;
