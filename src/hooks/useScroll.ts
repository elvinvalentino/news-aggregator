import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Scroll from "react-scroll";

export const useScroll = <T extends Function>(offset: number, action: T) => {
	const dispatch = useDispatch();

	const handleScroll = useCallback(() => {
		dispatch(action(window.pageYOffset));
	}, [dispatch, action]);

	useEffect(() => {
		Scroll.animateScroll.scrollTo(offset, {
			duration: 300,
		});
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);

		// eslint-disable-next-line
	}, [handleScroll]);
};
