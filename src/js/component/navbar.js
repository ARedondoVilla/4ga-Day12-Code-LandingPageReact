import React from "react";

export function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-ligth">
			<div className="container">
				<div className="p-2 flex-grow-1 bd-highlight">Flex item</div>
				<div className="p-2 bd-highlight">Flex item</div>
				<div className="p-2 bd-highlight">Third flex item</div>
			</div>
		</nav>
	);
}
