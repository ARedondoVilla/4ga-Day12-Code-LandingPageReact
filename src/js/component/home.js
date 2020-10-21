import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-xl-3">
						<Card />
					</div>
					<div className="col-xl-3">
						<Card />
					</div>
					<div className="col-xl-3">
						<Card />
					</div>
					<div className="col-xl-3">
						<Card />
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
