import React from "react";

export default function Card() {
	return (
		<div className="col-sm-12 col-md-6 col-lg-3 g-4">
			<div className="card">
				<img
					src="
	https://picsum.photos/500/325"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}
