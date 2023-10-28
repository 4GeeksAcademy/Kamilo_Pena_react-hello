import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


//include images into your bundle

//import Jumbotrons from "./jumbotron";
import Cards from "./cards";
import NavigationBar from "./naviBar.jsx";
import Jumbotrons from "./jumbotron.jsx";
import Footer from "./footer";

//create your first component
function Home  ()  {
	return (
		<div className="Home">
			<div className="Top">
				<NavigationBar/>;
			</div>
			<div>
				<Jumbotrons/>;
			</div>
			<div>
				<Cards/>
			</div>
			<div>
				<Footer/>
			</div>
		</div>
		
	);
};

export default Home;
