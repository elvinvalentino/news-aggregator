declare module "react-swipeable-bottom-sheet" {
	import React from "react";
	export interface IProps {
		open?: boolean;
		marginTop?: number;
		onChange?: (isOpen: boolean) => void;
		fullScreen?: boolean;
		bodyStyle?: React.CSSProperties;
		overflowHeight?: number;
	}

	declare const Component: React.FC<IProps>;

	export default Component;
}
