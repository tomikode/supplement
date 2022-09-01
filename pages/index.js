import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import jwt from "jsonwebtoken";
import { useState } from "react";

// connect mongodb and run some samples

//create api
//jwt later on
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
//https://mongoosejs.com/
//https://www.youtube.com/watch?v=DZBGEVgL2eE

export default function Home() {

	const [prods, setProds] = useState([])

	const request = async () => {
		// const token = jwt.sign('lol', 'secret')

		const res = await fetch("/api/products", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				// 'authorization': token
			},
		});
		const data = await res.json();
		setProds(data)
		console.log(data)
	};

	const post = async () => {
		const res = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: "Tomi" }),
		});
		const data = await res.json();
		console.log(data);
	};

	const put = async () => {
		const num = Math.round(Math.random() * (prods.length - 1))
		console.log(num)
		const rand = prods[num]._id
		const res = await fetch(`/api/products/${rand}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: "updated", shit: 'gay' })
		});
		const data = await res.json()
		console.log(data)
	};

	const deleteProd = async () => {
		const num = Math.round(Math.random() * (prods.length - 1))
		console.log(num)
		const rand = prods[num]._id
		const res = await fetch(`/api/products/${rand}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		console.log(data);
	};

	const [image, setImage] = useState(null)
	const [imgURL, setImgURL] = useState(null)

	const change = (event) => {
		if (event.target.files && event.target.files[0]){
			const img = event.target.files[0]
			setImage(img)
			setImgURL(URL.createObjectURL(img))
		}
	}

	const submitImage = async (e) => {
		e.preventDefault()
		console.log(image)
		const body = new FormData()
		body.append("file", image)
		const res = await fetch ("api/file", {
			method: "POST",
			body
		})
		console.log(res)
	}

	return (
		<div className={styles.container}>
			{/* <Nav /> */}
			{/* <div className={styles.cover} /> */}
			<button onClick={request}>Request</button>
			<button onClick={post}>Post</button>
			<button onClick={put}>Put</button>
			<button onClick={deleteProd}>Delete</button>
			<br />
			<form onSubmit={submitImage}>
				<input type="file" name="image" onChange={change} />
				<input type="submit" value="Submit" />
			</form>
			{prods ? prods.map(prod => <div key={prod._id}>{prod._id} {prod.name}</div>) : null}
		</div>
	);
}
