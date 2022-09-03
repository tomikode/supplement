import React from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Menu from "./Menu";

const Nav = () => {

	const openMenu = () => {
		document.getElementById("menu").classList.add("translate-x-0")
		const darken = document.getElementById("darken")
		darken.classList.add("h-screen")
		darken.classList.add("opacity-50")
		darken.classList.remove("h-0")
		darken.classList.remove("opacity-0")
	}

	return (
		<div className="inline bg-black h-32 p-5 border-b-white border-b fixed w-full text-white md:h-20">
			<Menu />
			<div className="max-w-6xl m-auto flex items-center relative">
				<div className="heading w-1/2 flex items-center">
					<Bars3Icon onClick={openMenu} className="h-8 w-8 inline hover:text-gold hover:cursor-pointer mr-3" />
					<Link href="/">
						<h1 className="inline m-0 text-xl select-none hover:text-gold hover:cursor-pointer">
							Nutrition
						</h1>
					</Link>
				</div>
				<div className="w-full text-center absolute top-12 md:relative md:top-0">
					<div className="flex items-center bg-superdark p-1">
						<input
							className="bg-superdark outline-none border-none w-full"
							type="text"
							placeholder="Search..."
						></input>
						<button className="border-none bg-superdark">
							<MagnifyingGlassIcon className="w-5 h-5 hover:text-gold" />
						</button>
					</div>
				</div>
				<div className="w-1/2 text-right">
					<Link href="/locator">
						<p className="inline select-none hover:text-gold hover:cursor-pointer mr-3">
							Offered Stores
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
