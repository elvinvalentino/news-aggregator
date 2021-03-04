import { createMuiTheme } from "@material-ui/core";

const theme = {
	palette: {
		type: "dark" as const,
		primary: {
			main: "#512B7B",
		},
		text: {
			primary: "#fff",
		},
		background: {
			default: "#352f44 ",
		},
	},
};

export default createMuiTheme(theme);
