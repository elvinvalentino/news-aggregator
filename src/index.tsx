import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";

import App from "./App";
import theme from "./theme";
import store from "./redux/store";
import "./index.css";

ReactDOM.render(
	<ReduxProvider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</ReduxProvider>,
	document.getElementById("root")
);
