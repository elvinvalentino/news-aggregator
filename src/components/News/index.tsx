import React from "react";
import SwipeableViews from "react-swipeable-views";

import { HandleChangeViewFunc } from "../../hooks/useTab";
import Home from "../../pages/Home";
import Business from "../../pages/Business";
import Entertainment from "../../pages/Entertainment";
import General from "../../pages/General";
import Health from "../../pages/Health";
import Science from "../../pages/Science";
import Sports from "../../pages/Sports";
import Technology from "../../pages/Technology";

interface IProps {
	index: number;
	handleChange: HandleChangeViewFunc;
}

const News: React.FC<IProps> = ({ index, handleChange }) => {
	return (
		<SwipeableViews index={index} onChangeIndex={handleChange}>
			<Home />
			<Business />
			<Entertainment />
			<General />
			<Health />
			<Science />
			<Sports />
			<Technology />
		</SwipeableViews>
	);
};

export default News;
