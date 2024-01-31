import { useState } from "react";

export const Hamburger = () => {
	// const { isOpen, onClose } = props;
	const [isOpen, setIsOpen] = useState(false);
	const toggleHamburger = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="hamburger" onClick={toggleHamburger}>
				{isOpen ? (
					"X"
				) : (
					<img className="ham-img" src="images/hamburger.png" alt="hamburger" />
				)}
			</div>
			{isOpen && <Navigation isOpen={isOpen} onClose={toggleHamburger} />}
		</>
	);
};
export const Navigation = () => {
	// const { isOpen, onClose } = props;
	const [isOpen] = useState(false);

	return (
		isOpen && (
			<>
				<ul className="nav-items">
					<li href="#">Menu</li>
					<li href="#">Location</li>
					<li href="#">About</li>
					<li href="#">Contact</li>
				</ul>
				{/* <button className="hamburger" onClick={onClose}>
					Close
				</button> */}
			</>
		)
	);
};
const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleHamburger = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<nav className="nav-bar container">
				<div className="logo">
					<img src="/images/brand_logo.png" alt="logo" />
				</div>
				{/* Render Navigation directly on large screens */}
				{window.innerWidth > 400 && <Navigation />}
				{/* Render Navigation conditionally on small screens */}
				{window.innerWidth <= 400 && (
					<Hamburger isOpen={isOpen} onClose={toggleHamburger} />
				)}
				<button>Login</button>
			</nav>
		</>
	);
};
export default NavBar;
