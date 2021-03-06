import React from "react";
import { StyledCardContent } from "./components";

const CardContent: React.FC = ({ children }) => {
	return <StyledCardContent>{children}</StyledCardContent>;
};

export default CardContent;
