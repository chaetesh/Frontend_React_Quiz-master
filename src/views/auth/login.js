import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../state/actions/authActions";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Notiflix from 'notiflix';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errorMsg: "",
			isLoading: false,
		};
	}

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			this.setState({isLoading: true})
			let res = await this.props.dispatch(userLogin(this.state));
			this.setState({isLoading: false})
			console.log(res, "inside submit");

			if (!res) {
				Notiflix.Notify.warning('Invalid Credentials!!');
				return;
			}
			Notiflix.Notify.success('Logged In Successfully');
			console.log("login props: ",this.props);
			this.props.history.push("/quiz/pay");
		} catch (error) {
			this.setState({isLoading: false})
          Notiflix.Notify.warning('Invalid Credentials!!');
		}
		//preventDdefault
	};

	render() {
		return (
			<section className="girl_image"style={{backgroundSize:'cover',height:'91vh'}}>
				<div className="container">
					{this.state.isLoading?Loading.dots(): Loading.remove()}
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto position-absolute mt-5" style={{right:"0"}}>
							<div className="text-white card-signin my-5">
								<div className="card-body">
									<h1 className="text-center mb-4" style={{fontSize:"1.5rem"}}>
										Sign In
									</h1>
									<form className="form-signin">
										<div className="form-label-group">
											<input
												onChange={(e) =>
													this.handleInput(e)
												}
												name="email"
												type="email"
												id="inputEmail"
												className="form-control"
												placeholder="Email address"
												value={this.state.email}
												required
												autoFocus
											/>
											<label htmlFor="inputEmail">
												Email address
											</label>
										</div>

										<div className="form-label-group">
											<input
												onChange={(e) =>
													this.handleInput(e)
												}
												name="password"
												type="password"
												id="inputPassword"
												className="form-control "
												placeholder="Password"
												value={this.state.password}
												required
											/>
											<label htmlFor="inputPassword">
												Password
											</label>
										</div>

										<div className="custom-control custom-checkbox mb-3">
											<input
												type="checkbox"
												className="custom-control-input"
												id="customCheck1"
											/>
											<label
												className="custom-control-label"
												htmlFor="customCheck1"
											>
												Remember password
											</label>
										</div>
										<button
											onClick={(e) =>
												this.handleSubmit(e)
											}
											className="btn btn-lg btn-primary btn-block text-uppercase"
											type="primary"
										>
											Sign in
										</button>
										<hr className="my-4" />
									</form>
									<h5 className="my-2">
										{" "}
										Doesn't have an account.{" "}
										<a href="/signup"> Signup</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

// function mapStateToProps(state)
function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(Login);
