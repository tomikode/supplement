import { XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const MenuLine = ({ name, nextMenu }) => {
	const cycleMenu = () => {
		const first = document.getElementById("first");
		first.classList.add("-translate-x-[50%]");
	};

	return (
		<li
			onClick={cycleMenu}
			className="border-t border-black p-3 hover:cursor-pointer flex items-center"
		>
			<p className="inline">{name}</p>
			<ChevronRightIcon className="w-5 h-5 inline float-right" />
		</li>
	);
};

const ProductMenu = () => {
	return (
		<ul>
			<li>Whey</li>
			<li>Amino</li>
		</ul>
	);
};

const Menu = () => {
	const closeMenu = () => {
		document.getElementById("menu").classList.remove("translate-x-0");
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
				<div id="first" className="flex w-[200%]">
					<div className="w-[50%]">
						<ul className="text-lg select-none">
							<MenuLine name="Home" />
							<MenuLine name="Shop by Product" />
							<MenuLine name="Shop by Goal" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
