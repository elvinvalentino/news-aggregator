import React, { memo } from "react";
// import SwipeableViews from "react-swipeable-views";
import TabPanel from "../TabPanel";

import Business from "../../pages/Business";
import Entertainment from "../../pages/Entertainment";
import General from "../../pages/General";
import Health from "../../pages/Health";
import Science from "../../pages/Science";
import Sports from "../../pages/Sports";
import Technology from "../../pages/Technology";
import { TabContentProps } from "../../types";

interface IProps {
	value: number;
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

const News: React.FC<IProps> = ({ value }) => {
	return (
		<>
			{Components.map((Component, idx) => (
				<TabPanel key={idx} value={value} index={idx}>
					<Component key={idx} isActive={idx === value} />
				</TabPanel>
			))}
		</>
	);
};

export default memo(News);
