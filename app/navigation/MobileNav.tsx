"use client";
import LinkLists from "./LinkLists";
import { FaXmark } from "react-icons/fa6";

interface NavProps {
	navState: boolean;
	navStateHandler: (state: boolean) => void;
}

const MobileNav = ({ navState, navStateHandler }: NavProps) => {
	const transformStyles = navState ? "transalte-x-0" : "translate-x-full";

	return (
		<nav
			className={`fixed top-0 right-0 h-screen p-8 bg-black ${transformStyles} transition-all`}>
			<button onClick={() => navStateHandler(false)}>
				<FaXmark className='text-white text-2xl' />
			</button>
			<LinkLists
				mobile
				navStateHandler={navStateHandler}
				itemsStyles='text-white'
				className='mt-12'
			/>
		</nav>
	);
};

export default MobileNav;
