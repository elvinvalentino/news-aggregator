import { useEffect, useState, useCallback } from "react";
import Scroll from "react-scroll";

export const useScroll = (isActive: boolean) => {
	const [offset, setOffset] = useState(0);

	const handleScroll = useCallback(() => {
		setOffset(window.pageYOffset);
	}, []);

	useEffect(() => {
		if (isActive) {
			console.log("test");
			Scroll.animateScroll.scrollTo(offset, {
				duration: 300,
			});
			window.addEventListener("scroll", handleScroll);
		}

		return () => window.removeEventListener("scroll", handleScroll);

		// eslint-disable-next-line
	}, [isActive, handleScroll]);
};
