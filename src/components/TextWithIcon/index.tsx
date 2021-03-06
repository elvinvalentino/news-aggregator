import React from "react";
import Grid from "@material-ui/core/Grid";

import { Label } from "./components";

interface IProps {
	icon: any;
	label: string;
}

const TextWithIcon: React.FC<IProps> = ({ icon, label, ...rest }) => {
	return (
		<Grid container alignItems="center" {...rest}>
			{icon}
			<Label>{label}</Label>
		</Grid>
	);
};

export default TextWithIcon;
