import React from "react";

export function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<div className="p-2 flex-grow-1 bd-highlight text-white">
					Flex item
				</div>
				<div className="p-2 bd-highlight text-white">Flex item</div>
				<div className="p-2 bd-highlight text-white">
					Third flex item
				</div>
			</div>
		</nav>
	);
}
