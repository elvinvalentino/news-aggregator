import React from "react";
import { StyledCard } from "./components";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<IProps> = ({ children, ...rest }) => {
	return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
