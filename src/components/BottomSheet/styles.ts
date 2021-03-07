import { CSSProperties } from "react";
import { theme } from "../../theme";

export const bodyStyle: CSSProperties = {
	backgroundColor: theme.palette.primary.light,
	borderRadius: "15px 15px 0 0",
	padding: ".8em",
	boxShadow: "0px -3px 9px rgba(0, 0, 0, 0.25)",
};

export const overlayStyle: CSSProperties = {
	background: "none",
};
