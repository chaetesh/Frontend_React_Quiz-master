import React from "react";
import { NavLink } from "react-router-dom";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { connect } from "react-redux";
function Header(props) {
	const handleLogout = ()=>{
		Confirm.show(
			'Logout',
			'Do you Want to Logout',
			'Yes',
			'No',
			() => {
			Notify.success(`${props.user.name} has been Succesfully loggedOut`);
			console.log("logout inside");
			console.log(props)
			localStorage.clear();
			window.location.replace('http://localhost:3000/login');
			},
			() => {
			Notify.failure(`${props.user.name}, Logout Cancelled`);
			return;
			},
			);
	}
	return (
		<div className="bg-dark ">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand font-weight-bold" href="/">
						Quiz
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNav">
						<ul className="navbar-nav ml-auto font-weight-bold">
							{props.user ? (
								<>
									<li className="nav-item">
										<NavLink
											to="/profile"
											activeClassName="active"
											className="nav-link text-white"
										>
											{props.user.name}
										</NavLink>
									</li>
									<li className="nav-item text-white">
										<button
											to="/logout"
											activeClassName="active"
											className="nav-link text-black"
											onClick={handleLogout}
										>
											Logout
										</button>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<NavLink
											to="/signup"
											activeClassName="active"
											className="nav-link"
										>
											Signup
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/login"
											activeClassName="active"
											className="nav-link"
										>
											Login
										</NavLink>
									</li>
								</>
							)}
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		user: state.currentUser.userInfo,
	};
}
export default connect(mapStateToProps)(Header);
