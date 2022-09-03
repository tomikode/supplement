import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Supplement Store</title>
			</Head>
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
