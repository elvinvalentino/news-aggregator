import { useState, ChangeEvent } from "react";

export type HandleChangeTabFunc = (
	_: ChangeEvent<{}>,
	newValue: number
) => void;

export type HandleChangeViewFunc = (newValue: number) => void;

export const useTab = () => {
	const [active, setActive] = useState<number>(0);

	const handleChangeTab: HandleChangeTabFunc = (_, newValue) => {
		setActive(newValue);
	};

	const handleChangeView: HandleChangeViewFunc = newValue => {
		setActive(newValue);
	};

	return {
		active,
		handleChangeTab,
		handleChangeView,
	};
};
