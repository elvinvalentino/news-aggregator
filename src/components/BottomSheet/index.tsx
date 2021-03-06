import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";

import { bottomSheetClose } from "../../redux/actions/bottomSheetActions";
import { RootState } from "../../types";

interface IProps {}

const BottomSheet: React.FC<IProps> = () => {
	const { isOpen, selectedArticle } = useSelector(
		(state: RootState) => state.bottomSheet
	);
	const dispatch = useDispatch();

	return (
		<SwipeableBottomSheet
			onChange={isOpen => !isOpen && dispatch(bottomSheetClose())}
			marginTop={128}
			open={isOpen}
		>
			<h1>{selectedArticle?.title}</h1>
			<span>
				{selectedArticle?.author} / {selectedArticle?.publishedAt}
			</span>
			<img src={selectedArticle?.urlToImage} alt="article" />
			<p>{selectedArticle?.content}</p>
			<p>Baca selengkapnya di {selectedArticle?.url}</p>
		</SwipeableBottomSheet>
	);
};

export default BottomSheet;
