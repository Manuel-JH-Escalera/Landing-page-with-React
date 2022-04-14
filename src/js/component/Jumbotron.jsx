import React from "react";

export default function Jumbotron() {
	return (
		<div className="card m-5 p-4 bg-secondary bg-opacity-25 ">
			<div className="card-body">
				<h1 className="card-title display-1">
					<b>A Warm Welcome!</b>
				</h1>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua onsectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
				<a href="#" className="btn btn-primary">
					Call to action!
				</a>
			</div>
		</div>
	);
}
