import React, { memo } from "react";
import TabPanel from "../TabPanel";

import Business from "../../pages/Business";
import Entertainment from "../../pages/Entertainment";
import General from "../../pages/General";
import Health from "../../pages/Health";
import Science from "../../pages/Science";
import Sports from "../../pages/Sports";
import Technology from "../../pages/Technology";

interface IProps {
	value: number;
}

const Components: React.FunctionComponent[] = [
	General,
	Business,
	Entertainment,
	Science,
	Health,
	Sports,
	Technology,
];

const News: React.FC<IProps> = ({ value }) => {
	return (
		<>
			{Components.map((Component, idx) => (
				<TabPanel key={idx} value={value} index={idx}>
					<Component key={idx} />
				</TabPanel>
			))}
		</>
	);
};

export default memo(News);
