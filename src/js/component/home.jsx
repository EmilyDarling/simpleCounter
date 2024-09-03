import React from "react";
import ImgCard from "./imgCard.jsx";
import CounterCard from "./counterCard.jsx";


//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid bg-black mx-2 mt-2 row px-5" style={{height: 200}}>
			<div className="col-2">
				<ImgCard />
			</div>
			<div className="col-10 ">
				<div className="row mt-1">
					 <CounterCard wholeTime = {props.time}/>;
					
				</div>
			</div>
		</div>
	);
};

export default Home;
