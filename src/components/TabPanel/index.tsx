import React from "react";
import Box from "@material-ui/core/Box";

interface IProps {
	value: number;
	index: number;
}

const TabPanel: React.FC<IProps> = ({ index, value, children, ...rest }) => {
	return (
		<div role="tabpanel" hidden={value !== index} {...rest}>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

export default TabPanel;
