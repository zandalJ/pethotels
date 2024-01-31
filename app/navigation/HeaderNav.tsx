"use client";

import Link from "next/link";
import LinkLists from "./LinkLists";
import BurgerIcon from "./BurgerIcon";

interface NavProps {
	mobileNavState: boolean;
	mobileNavHandler: () => void;
}

const HeaderNav = ({ mobileNavHandler }: NavProps) => {
	return (
		<nav className='py-2 px-6 md:px-11'>
			<div className='flex justify-between items-center xl:w-[1200px] mx-auto'>
				<Link href='#'>Pethotels</Link>
				<LinkLists className='hidden lg:flex' />
				<BurgerIcon mobileNavHandler={mobileNavHandler} />
			</div>
		</nav>
	);
};

export default HeaderNav;
