import { useEffect } from "react";
import Scroll from "react-scroll";

export const useScroll = (
	isActive: boolean,
	offset: number,
	handleScroll: () => void
) => {
	useEffect(() => {
		if (isActive) {
			console.log("test");
			Scroll.animateScroll.scrollTo(offset, {
				duration: 300,
			});
			window.addEventListener("scroll", handleScroll);
		} else {
			window.removeEventListener("scroll", handleScroll);
		}

		// eslint-disable-next-line
	}, [isActive, handleScroll]);
};
