import React from "react";
import SwipeableViews from "react-swipeable-views";

import { HandleChangeViewFunc } from "../../hooks/useTab";
import Business from "../../pages/Business";
import Entertainment from "../../pages/Entertainment";
import General from "../../pages/General";
import Health from "../../pages/Health";
import Science from "../../pages/Science";
import Sports from "../../pages/Sports";
import Technology from "../../pages/Technology";
import { TabContentProps } from "../../types";

interface IProps {
	index: number;
	handleChange: HandleChangeViewFunc;
}

const Components: React.FunctionComponent<TabContentProps>[] = [
	Business,
	Entertainment,
	General,
	Health,
	Science,
	Sports,
	Technology,
];

const News: React.FC<IProps> = ({ index, handleChange }) => {
	return (
		<SwipeableViews
			index={index}
			onChangeIndex={handleChange}
			animateHeight={true}
		>
			{Components.map((Component, idx) => (
				<Component key={idx} isActive={idx === index} />
			))}
		</SwipeableViews>
	);
};

export default News;
