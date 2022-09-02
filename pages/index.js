import Nav from "../components/Nav";
import jwt from "jsonwebtoken";
import { useState } from "react";

// connect mongodb and run some samples

//create api
//jwt later on
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
//https://mongoosejs.com/
//https://www.youtube.com/watch?v=DZBGEVgL2eE

export default function Home() {
	return (
		<div>
			<Nav />
			<div className="h-[2000px] bg-slate-500" />
		</div>
	);
}
