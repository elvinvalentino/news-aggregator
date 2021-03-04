import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { NavbarBrand } from "./components";

const Navbar: React.FC<{}> = () => {
	return (
		<Appbar position="static">
			<Toolbar variant="dense">
				<NavbarBrand variant="h6">Vinly</NavbarBrand>
			</Toolbar>
		</Appbar>
	);
};

export default Navbar;
