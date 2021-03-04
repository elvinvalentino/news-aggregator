import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { AppBar } from "./components";
import useStyles from "./styles";
import tabLabels from "./tabsLabels";
import { HandleChangeTabFunc } from "../../hooks/useTab";

interface IProps {
	value: number;
	handleChange: HandleChangeTabFunc;
}

const TabsComponent: React.FC<IProps> = ({ handleChange, value }) => {
	const classes = useStyles();

	return (
		<AppBar position={"sticky"}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="auto"
				classes={{ indicator: classes.indicator }}
			>
				{tabLabels.map((label, index) => (
					<Tab key={index} label={label} />
				))}
			</Tabs>
		</AppBar>
	);
};

export default TabsComponent;
