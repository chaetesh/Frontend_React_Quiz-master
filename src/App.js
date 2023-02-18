import React from "react";
import "./assets/stylesheets/main.scss";
import "bulma/css/bulma.css";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import HomePage from "./views/auth/HomePage";
import LandingPage from "./views/common/LandingPage";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CreateQuiz from "./views/quiz/createQuiz";
import Header from "./views/common/Header";
import AttemptQuiz from "./views/quiz/attemptQuiz";
import Login from "./views/auth/login";
import Signup from "./views/auth/signup";
import PaymentRoute from "./views/auth/PaymentRoute";
import EditQuiz from "./views/quiz/editQuiz";

import { identifyUser } from "./state/actions/authActions";
import createQuiz from "./views/quiz/createQuiz";
import Profile from "./views/auth/Profile";
import attemptQuiz from "./views/quiz/attemptQuiz";
import { showQuiz } from "./state/actions/quizActions";
import QuizResult from "./views/quiz/QuizResult";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDisclamerClose: false
		};
	}

	componentDidMount() {
		if (localStorage["auth-token"]) {
			this.props.dispatch(identifyUser());
		}
	}

	render() {
		console.log("home props: ", this.props);
		const ProtectedRoutes = () => {
			return (
				<Switch>
					 <Route exact path="/signup" component={Signup} />
					 <Route path="/quiz/pay" component={PaymentRoute} />
					 <Route path="/quiz/new" component={CreateQuiz} />
					 <Route exact path="/quiz/:id" component={AttemptQuiz} />
					 <Route exact path="/quiz/:id/edit" component={EditQuiz} />
					 <Route path="/profile" component={Profile} />
					 <Route path="/quizresult" component={QuizResult} />
				 </Switch>
			 );
		 }

		 const PublicRoutes = () => {
			return (
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			);
		}
		const currentUser = this.props.currentUser;
		console.log("props",this.props);
		return (
			<>
				{currentUser.isAuthReqInProgress ? (
					Loading.dots()
				) : (
					<>
						<Header />
						{Loading.remove()}
						{currentUser.userInfo ? (
							ProtectedRoutes()
						) : (
							PublicRoutes()
						)}
					</>
				)}
			</>
		);
	}
}

function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}
export default connect(mapStateToProps)(App);
