import React, { memo } from "react";
import { useDispatch } from "react-redux";
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
import { articleSelected } from "../../redux/actions/bottomSheetActions";
import { Article } from "../../types";

interface IProps {
	article: Article;
}

moment.locale("id");

const NewsCard: React.FC<IProps> = ({ article }) => {
	const dispatch = useDispatch();

	const handleOnClick = () => dispatch(articleSelected(article));

	return (
		<Card onClick={handleOnClick}>
			<CardImage
				src={
					article.urlToImage ||
					`https://via.placeholder.com/300x200/352F44/ffffff?text=${article.source.name}`
				}
			/>
			<CardContent>
				<NewsTitle>{article.title}</NewsTitle>
				<TextWithIcon
					icon={<PersonIcon />}
					label={article.author || article.source.name}
				/>
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
