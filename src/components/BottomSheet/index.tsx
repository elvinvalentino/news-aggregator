import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import moment from "moment";
import "moment/locale/id";
import { useSelector, useDispatch } from "react-redux";

import {
	ArticleTitle,
	Breadcrumbs,
	ArticleAuthor,
	ArticleDate,
	ArticleImage,
	ArticleContent,
	ArticleLink,
} from "./components";
import { bodyStyle, overlayStyle } from "./styles";
import { bottomSheetClose } from "../../redux/actions/bottomSheetActions";
import { RootState } from "../../types";

moment.locale("id");

const BottomSheet: React.FC = () => {
	const { isOpen, selectedArticle } = useSelector(
		(state: RootState) => state.bottomSheet
	);

	const dispatch = useDispatch();

	return (
		<SwipeableBottomSheet
			onChange={isOpen => !isOpen && dispatch(bottomSheetClose())}
			marginTop={128}
			open={isOpen}
			style={{ boxShadow: "unset" }}
			bodyStyle={bodyStyle}
			overlayStyle={overlayStyle}
			overflowHeight={0.01}
		>
			<ArticleTitle variant="h5">{selectedArticle?.title}</ArticleTitle>
			<Breadcrumbs>
				<ArticleAuthor>
					{selectedArticle?.author || selectedArticle?.source.name}
				</ArticleAuthor>
				<ArticleDate>
					{moment(selectedArticle?.publishedAt).format("DD MMMM yyyy HH:mm:ss")}
				</ArticleDate>
			</Breadcrumbs>
			<ArticleImage
				src={
					selectedArticle?.urlToImage ||
					`https://via.placeholder.com/300x200/2A2438/ffffff?text=${selectedArticle?.source.name}`
				}
				alt="article"
			/>
			<ArticleContent>{selectedArticle?.content}</ArticleContent>
			<ArticleLink href={selectedArticle?.url} target="_blank">
				Baca selengkapnya di {selectedArticle?.url}
			</ArticleLink>
		</SwipeableBottomSheet>
	);
};

export default BottomSheet;
