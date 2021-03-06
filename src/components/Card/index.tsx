import React from "react";
import { StyledCard } from "./components";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<IProps> = ({ children, onClick, ...rest }) => {
	return (
		<StyledCard {...rest} onClick={onClick}>
			{children}
		</StyledCard>
	);
};

export default Card;
