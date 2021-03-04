import { useState, ChangeEvent } from "react";
import Scroll from "react-scroll";

export type HandleChangeTabFunc = (
	_: ChangeEvent<{}>,
	newValue: number
) => void;

export type HandleChangeViewFunc = (newValue: number) => void;

export const useTab = () => {
	const [active, setActive] = useState<number>(0);

	const handleChangeTab: HandleChangeTabFunc = (_, newValue) => {
		setActive(newValue);
		Scroll.animateScroll.scrollToTop({
			duration: 300,
		});
	};

	const handleChangeView: HandleChangeViewFunc = newValue => {
		setActive(newValue);
		Scroll.animateScroll.scrollToTop({
			duration: 300,
		});
	};

	return {
		active,
		handleChangeTab,
		handleChangeView,
	};
};
