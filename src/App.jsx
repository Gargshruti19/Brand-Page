import NavBar, { Hamburger } from "./Components/Navigation";
import HeroSection from "./Components/Hero";
import { useState } from "react";
import "./App.css";
import "./Responsive.css";
const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHamburger = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<Hamburger />

			<NavBar isOpen={isOpen} onClose={toggleHamburger} />
			<HeroSection />
		</div>
	);
};
export default App;
