import { useEffect } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

// connect mongodb and run some samples

//https://mongoosejs.com/
//https://www.youtube.com/watch?v=DZBGEVgL2eE

export default function Home() {


	return (
		<div className={styles.container}>
			<Nav />
			<div className={styles.cover} />
		</div>
	);
}