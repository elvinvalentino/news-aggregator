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
	},
};

export default createMuiTheme(theme);
