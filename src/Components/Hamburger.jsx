import { useState } from "react";
import NavBar from "./Navigation";
const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleHamburger = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="hamburger" onClick={toggleHamburger}>
				<img className="ham-img" src="images/hamburger.png" alt="hamburger" />
			</div>
			{isOpen && <NavBar isOpen={isOpen} onClose={toggleHamburger} />}
		</>
	);
};
export default Hamburger;
