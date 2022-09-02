import React from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Nav = () => {
	return (
		<div className="inline bg-black h-32 p-5 border-b-white border-b fixed w-full text-white md:h-20">
			<div className="max-w-6xl m-auto flex items-center relative">
				<div className="heading w-1/2">
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
				<div className="w-1/2 text-right flex items-center flex-row-reverse">
					<Bars3Icon className="h-8 w-8 inline" />
					<p className="inline select-none hover:text-gold hover:cursor-pointer mr-2">
						Offered Stores
					</p>
				</div>
			</div>
		</div>
	);
};

export default Nav;
