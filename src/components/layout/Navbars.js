import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbars = () => {
	return (
		<>
			<nav className="navbar navbar-expand-md bg-dark navbar-dark">
				<NavLink className="navbar-brand" to="/">
					Student Management System
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavbar"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavbar">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">
								Student Management
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact">
								Teacher Management
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbars;
