import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"


const Home = () => {
	return (
		<div>
			<Navbar />
		
			<div className="text-center container">
					<div className="text-center mt-5">
						<Jumbotron/>
					</div>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
						<div className="col">
							<Card title="pt-119" description="mi cohort" />
						</div>
						<div className="col">
							<Card title="blabla" description="bleble" />
						</div>
						<div className="col">
							<Card title="blibli" description="bloblo" />
						</div>
						<div className="col">
							<Card title="4geeks" description="blublu" />
						</div>
					</div>	
			</div>
		</div>
	);
};

export default Home;