import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import jwt from "jsonwebtoken";

// connect mongodb and run some samples



//create api
//jwt later on
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
//https://mongoosejs.com/
//https://www.youtube.com/watch?v=DZBGEVgL2eE

export default function Home() {


	const request = async () => {
		// const token = jwt.sign('lol', 'secret')

		const res = await fetch('/api/products', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// 'authorization': token
			}
		})
		const data = await res.json()
		console.log(data)
	}

	const post = async () => {
		const res = await fetch('/api/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: 'Tomi' })
		})
		const data = await res.json()
		console.log(data)
	}

	return (
		<div className={styles.container}>
			<Nav />
			<div className={styles.cover} />
			<button onClick={request}>Request</button>
			<button onClick={post}>Post</button>
		</div>
	);
}