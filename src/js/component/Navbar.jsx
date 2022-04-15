import React from "react";

export default function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							{props.btn1}
						</a>
						<a className="nav-link" href="#">
							{props.btn2}
						</a>
						<a className="nav-link" href="#">
							{props.btn3}
						</a>
						<a className="nav-link " href="#">
							{props.btn4}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
