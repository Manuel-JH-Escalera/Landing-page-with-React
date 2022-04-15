import React from "react";

export default function Footer(props) {
	return (
		<div className="container-fluid bg-dark text-center m-0 p-5 text-white">
			<p className="m-0">{props.footertext}</p>
		</div>
	);
}
