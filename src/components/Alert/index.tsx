import React from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface IProps extends AlertProps {}

const Alert: React.FC<IProps> = ({ ...rest }) => {
	return <MuiAlert elevation={6} variant="filled" {...rest}></MuiAlert>;
};

export default Alert;
