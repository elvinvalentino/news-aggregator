import { createMuiTheme } from "@material-ui/core";

export const theme = {
	palette: {
		type: "dark" as const,
		primary: {
			light: "#352F44",
			main: "#512B7B",
		},
		text: {
			primary: "#fff",
		},
		background: {
			default: "#2A2438 ",
		},
		grey: {
			A100: "#d6d6d6",
		},
	},
};

export default createMuiTheme(theme);
