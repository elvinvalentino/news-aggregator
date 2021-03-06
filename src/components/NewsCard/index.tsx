import React, { memo } from "react";
import moment from "moment";
import "moment/locale/id";

import TextWithIcon from "../TextWithIcon";
import Card from "../Card";
import CardContent from "../CardContent";
import {
	CardImage,
	NewsTitle,
	PersonIcon,
	CalenderIcon,
	Description,
	Source,
	SourceContainer,
} from "./components";
import { Article } from "../../types";

interface IProps {
	article: Article;
}

moment.locale("id");

const NewsCard: React.FC<IProps> = ({ article }) => {
	return (
		<Card>
			<CardImage src={article.urlToImage} />
			<CardContent>
				<NewsTitle>{article.title}</NewsTitle>
				<TextWithIcon icon={<PersonIcon />} label={article.author} />
				<TextWithIcon
					icon={<CalenderIcon />}
					label={moment(article.publishedAt).format("DD MMMM yyyy")}
				/>
				<Description>{article.description}</Description>
				<SourceContainer>
					<Source>Sumber: {article.source.name}</Source>
				</SourceContainer>
			</CardContent>
		</Card>
	);
};

export default memo(NewsCard);
