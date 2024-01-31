"use client";

import { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import MobileNav from "./MobileNav";
import { useWidth } from "../hooks/useWidth";

const Navigation = () => {
	const [activeMobileNav, setActiveMobileNav] = useState(false);

	const width = useWidth();

	useEffect(() => {
		if (width >= 1024) {
			setActiveMobileNav(false);
		}
	}, [width]);

	return (
		<div className='w-full fixed left-0 bg-main-background z-[10]'>
			<HeaderNav
				mobileNavState={activeMobileNav}
				mobileNavHandler={() => setActiveMobileNav(state => !state)}
			/>
			<MobileNav
				navState={activeMobileNav}
				navStateHandler={(state: boolean) => setActiveMobileNav(state)}
			/>
		</div>
	);
};

export default Navigation;
