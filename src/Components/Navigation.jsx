const NavBar = () => {
	return (
		<nav className="nav-bar container">
			<div className="logo">
				<img src="/images/brand_logo.png" alt="logo" />
			</div>
			<ul className="nav-items">
				<li href="#">Menu</li>
				<li href="#">Location</li>
				<li href="#">About</li>
				<li href="#">Contact</li>
			</ul>
			<button>Login</button>
		</nav>
	);
};
export default NavBar;
