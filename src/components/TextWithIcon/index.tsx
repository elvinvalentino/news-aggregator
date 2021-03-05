import React from "react";

interface IProps {
	icon: any;
	label: string;
}

const TextWithIcon: React.FC<IProps> = ({ icon, label }) => {
	return <h1>Text With Icon</h1>;
};

export default TextWithIcon;
