import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<nav className="nav-bar ">
				<div className="logo">
					<img src="/images/brand_logo.png" alt="logo" />
				</div>
				<div
					className={showMenu ? "mobile-screen-display nav-items" : "nav-items"}
				>
					<ul>
						<li href="#">Menu</li>
						<li href="#">Location</li>
						<li href="#">About</li>
						<li href="#">Contact</li>
						<button className="ul-btn">Login</button>
					</ul>
				</div>
				<div className="login-btn">
					<button className="btn">Login</button>
					<div className="hamburger-menu ">
						<a href="#" onClick={() => setShowMenu(!showMenu)}>
							<GiHamburgerMenu />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
export default NavBar;
