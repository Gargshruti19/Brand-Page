const HeroSection = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<h1>
					YOUR FEET DESERVE <br /> THE BEST
				</h1>
				<p>
					YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
					SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
					SHOES.
				</p>
				<div className="hero-btn">
					<button>Shop Now</button>
					<button className="secondary-btn">Category</button>
				</div>
				<div className="shopping">
					<p>Also Available On</p>
					<div className="brand-icons">
						<img src="images/flipkart.png" alt="amazon-logo"></img>
						<img src="images/amazon.png" alt="flipkart-logo"></img>
					</div>
				</div>
			</div>
			<div className="hero-image">
				<img src="images/shoe_image.png" alt="shoe-image" />
			</div>
		</div>
	);
};

export default HeroSection;
