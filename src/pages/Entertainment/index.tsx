import React from "react";

import { TabContentProps } from "../../types";

const Entertainment: React.FC<TabContentProps> = ({ isActive }) => {
	if (isActive) return <div>Active</div>;

	return <div>hello</div>;
};

export default Entertainment;
