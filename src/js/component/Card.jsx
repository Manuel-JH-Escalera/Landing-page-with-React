import React from "react";

export default function Card(props) {
	return (
		<div className="col-sm-12 col-md-6 col-lg-3 g-4">
			<div className="card">
				<img src={props.img} className="card-img-top" alt="..." />
				<div className="card-body text-center">
					<h5 className="card-title">{props.cardtitle}</h5>
					<p className="card-text">{props.cardtext}</p>
					<a href="#" className="btn btn-primary">
						{props.btntext}
					</a>
				</div>
			</div>
		</div>
	);
}
