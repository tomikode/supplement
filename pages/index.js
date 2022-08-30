import { useEffect } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

// connect mongodb and run some samples

export default function Home() {


  // const req = async () => {
  //   const result = await fetch('/api/hello', {
  //     method: "GET",
  //     content: 'application/json'
  //   })

  //   console.log(result)
  // }

  // useEffect(() => {
  //   req()
  // }, [])


	return (
		<div className={styles.container}>
			<Nav />
			<div className={styles.cover} />
		</div>
	);
}