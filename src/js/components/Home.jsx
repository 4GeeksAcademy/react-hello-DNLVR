import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
		
			<div className="text-center container">
					<div className="text-center mt-5">
						<Jumbotron/>
					</div>
					<div className="row">
						<div className="col-3">
							<Card title="pt-119" description="mi cohort"/>
						</div>
						<div className="col-3">
							<Card title="blabla" description="bleble"/>
						</div>
						<div className="col-3">
							<Card title="blibli" description="bloblo"/>
						</div>
						<div className="col-3">
							<Card title="4geeks" description="blublu"/>
						</div>
					</div>	
			</div>
		</div>
	);
};

export default Home;