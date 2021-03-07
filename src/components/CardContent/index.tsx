import React from "react";
import { StyledCardContent } from "./components";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent: React.FC<IProps> = ({ children, ...rest }) => {
	return <StyledCardContent {...rest}>{children}</StyledCardContent>;
};

export default CardContent;
