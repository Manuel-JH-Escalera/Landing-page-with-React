import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar
				brand="Start Bootstrap"
				btn1="Home"
				btn2="About"
				btn3="
Services"
				btn4="Contact"
			/>
			<div className="container">
				<Jumbotron
					ttljumbo="A Warm Welcome!"
					txtjumbo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua onsectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua."
					btntxtjumbo="Call to action!"
				/>
				<div className="container">
					<div className="row p-4 m-1">
						<Card
							img="https://picsum.photos/seed/100/500/325/"
							cardtitle="Imagen 1"
							cardtext="Imagen 1 text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							btntext="Find out More! 1"
						/>
						<Card
							img="https://picsum.photos/seed/101/500/325/"
							cardtitle="Imagen 2"
							cardtext="Imagen 2 text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							btntext="Find out More! 2"
						/>
						<Card
							img="https://picsum.photos/seed/102/500/325/"
							cardtitle="Imagen 3"
							cardtext="Imagen 3 text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							btntext="Find out More! 3"
						/>
						<Card
							img="https://picsum.photos/seed/103/500/325/"
							cardtitle="Imagen 4"
							cardtext="Imagen 4 text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							btntext="Find out More! 4"
						/>
					</div>
				</div>
			</div>
			<Footer footertext="Copyright © Your Website 2022" />
		</div>
	);
};

export default Home;
