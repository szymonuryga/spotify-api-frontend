import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ searchQuery, handleChange }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Spotify
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link active"
								aria-current="page"
								to="/home"
							>
								Home
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="/favourite">
								Your Favourite Songs
							</NavLink>
						</li>
					</ul>
					<form className="searchBox">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							value={searchQuery}
							onChange={handleChange}
						/>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
