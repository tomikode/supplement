import React from "react";
import styles from "../styles/Nav.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Nav = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.maxWidth}>
				<div className={styles[("heading", "left")]}>
					<h1>Nutrition</h1>
				</div>
				<div className={styles.middle}>
					<div className={styles.searchBar}>
						<input
							className={styles.searchInput}
							type="text"
							placeholder="Search..."
						></input>
						<button className={styles.searchButton}>
							<MagnifyingGlassIcon
								className={styles.searchIcon}
							/>
						</button>
					</div>
				</div>
				<div className={styles.right}><p>Offered Stores</p></div>
			</div>
		</div>
	);
};

export default Nav;
