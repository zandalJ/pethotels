"use client";

import { FaSearch, FaHeart, FaCalendar, FaRegBell } from "react-icons/fa";
import Link from "next/link";

interface ListProps {
	className?: string;
	itemsStyles?: string;
	mobile?: boolean;
	navStateHandler?: (state: boolean) => void;
}

const LinkLists = ({
	className = "",
	itemsStyles = "",
	mobile = false,
	navStateHandler,
}: ListProps) => {
	const itemsData = [
		{ content: <FaSearch className='text-xl' />, link: "#serach" },
		{ content: <FaHeart className='text-xl' />, link: "#favourite" },
		{ content: <FaCalendar className='text-xl' />, link: "#calendar" },
		{ content: <FaRegBell className='text-xl' />, link: "#notifications" },
	];

	const itemStyle = mobile ? "mb-4" : "ml-4";

	const items = itemsData.map((item, index) => {
		return (
			<li key={index} className={`${itemStyle} ${itemsStyles}`}>
				<Link href={item.link}>{item.content}</Link>
			</li>
		);
	});

	return <ul className={`${className}`}>{items}</ul>;
};

export default LinkLists;
