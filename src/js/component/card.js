import React from "react";

export function Card(props) {
	return (
		<div className="card text-center">
			<img
				src="https://picsum.photos/500/350"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Ese hombree a wan a wan papaar papaar te va a hasé pupitaa
					se calle ustée. Te va a hasé pupitaa se calle ustée llevame
					al sircoo está la cosa muy malar.
				</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
