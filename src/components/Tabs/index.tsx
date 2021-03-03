import React, { useEffect, useRef, useState } from "react";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { AppBar } from "./components";
import useStyles from "./styles";
import tabLabels from "./tabsLabel";

const TabsComponent: React.FC<{}> = () => {
	const [position, setPosition] = useState<"static" | "fixed">("static");
	const classes = useStyles();
	const tabEl = useRef<HTMLElement>();

	useEffect(() => {
		const handleScroll = () => {
			if (!tabEl.current) return;
			console.log(window.pageYOffset, tabEl.current.offsetTop);
			if (window.pageYOffset > tabEl.current.offsetTop) {
				setPosition("fixed");
			} else {
				setPosition("static");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AppBar position={"sticky"} ref={tabEl}>
			<Tabs
				value={0}
				variant="scrollable"
				scrollButtons="auto"
				classes={{ indicator: classes.indicator }}
			>
				{tabLabels.map(label => (
					<Tab label={label} />
				))}
			</Tabs>
		</AppBar>
	);
};

export default TabsComponent;
