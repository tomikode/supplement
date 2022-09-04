import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";

//either use display none and appear on top or render all in long ass line
// or use state to set next, prev and current carousel item

//long ass line with all next possible menus, all other have display none

const MenuLine = ({ name }) => {


	return (
		<li
			className="border-t border-black p-3 hover:cursor-pointer flex items-center"
		>
			<p className="inline">{name}</p>
			<ChevronDownIcon className="w-5 h-5 inline float-right ml-auto" />
		</li>
	);
};

const Menu = () => {
	const closeMenu = () => {
		const menu = document.getElementById("menu");
		menu.classList.remove("translate-x-0");
		menu.classList.add("-translate-x-full");
		const darken = document.getElementById("darken");
		darken.classList.remove("h-screen");
		darken.classList.remove("opacity-50");
		darken.classList.add("h-0");
		darken.classList.add("opacity-0");
	};

	return (
		<>
			<div
				id="darken"
				className="w-full h-0 absolute opacity-0 z-10 bg-black top-0 left-0"
			></div>
			<div
				id="menu"
				className="bg-white absolute top-0 left-0 h-screen text-black w-64 border-r border-black z-10 -translate-x-full transition-transform overflow-x-hidden"
			>
				<XMarkIcon
					onClick={closeMenu}
					className="w-10 h-10 hover:text-gold hover:cursor-pointer m-2"
				/>
				<div id="cycle">
					<div className="">
						<ul className="text-lg select-none">
							<MenuLine name="Home" closeMenu={closeMenu} />
							<MenuLine name="Shop by Product" closeMenu={closeMenu} />
							<MenuLine name="Shop by Goal" closeMenu={closeMenu} />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
