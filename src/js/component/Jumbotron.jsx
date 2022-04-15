import React from "react";

export default function Jumbotron(props) {
	return (
		<div className="card m-5 p-4 bg-secondary bg-opacity-25 ">
			<div className="card-body">
				<h1 className="card-title display-1">
					<b>{props.ttljumbo}</b>
				</h1>
				<p className="card-text">{props.txtjumbo}</p>
				<a href="#" className="btn btn-primary">
					{props.btntxtjumbo}
				</a>
			</div>
		</div>
	);
}
