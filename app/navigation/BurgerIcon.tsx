"use client";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface IconProps {
	mobileNavHandler: () => void;
}

const BurgerIcon = ({ mobileNavHandler }: IconProps) => {
	return (
		<button className='lg:hidden' onClick={mobileNavHandler}>
			<FaBars />
		</button>
	);
};

export default BurgerIcon;
