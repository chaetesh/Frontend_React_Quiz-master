import React, { Component } from "react";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { connect } from "react-redux";
import {showQuiz } from "../../state/actions/quizActions";
import { attemptQuiz } from "../../state/actions/quizActions";


class AttemptQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			currentQuestion:[],
			currentQuestionIndex:0,
			timer: 0
		};
	}
	componentDidMount() {
		var quizId = this.props.match.params.id;
		console.log("quizid: ",quizId);
		this.props.dispatch(showQuiz(quizId));
		this.interval = setInterval(() => {
			if(this.state.timer < 1){
				this.handleNextQuestion();
			}
			this.setState((prevState) => ({
			  timer: prevState.timer - 1
			}));
		  }, 1000);
	}
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			var allQuestions = this.props.quiz.questions.map((question) => {
				var obj = { questionId: question._id, answers: [] };
				return obj;
			});
			this.setState({ questions: allQuestions });
			this.setState({timer: this.props.quiz.questions[this.state.currentQuestionIndex].timer})
		}
	}
	handleCheckbox = (e, option, index) => {
		var newQuestions = this.state.questions;
		if (e.target.checked) {
			newQuestions = newQuestions.map((question, i) => {
				if (i === index && !question.answers.includes(option)) {
					question.answers.push(option);
					return question;
				}
				return question;
			});
			console.log(newQuestions);
			this.setState({ questions: newQuestions });
		} else {
			newQuestions = newQuestions.map((question, i) => {
				if (i === index && question.answers.includes(option)) {
					question.answers = question.answers.filter(
						(answer) => answer !== option
					);
					return question;
				}
				return question;
			});
			this.setState({ questions: newQuestions });
		}
	};

	handleNextQuestion = () => {
		if(this.state.currentQuestionIndex+1 > (this.props.quiz.questions.length)-1){
			document.getElementById('timer').innerHTML='TimeUp!! Please Submit'
			clearInterval(this.interval);
			return;
		}
		this.setState({timer: this.props.quiz.questions[this.state.currentQuestionIndex+1].timer})
		const nextIndex = this.state.currentQuestionIndex + 1;
		this.setState({currentQuestionIndex: nextIndex});
	}

	handleSubmitQuiz = () => {
		var attempt;
		attempt = {
			quizId: this.props.match.params.id,
			questions: this.state.questions,
		};
		this.props.dispatch(attemptQuiz({ attempt }));
		this.props.history.push("/quizresult");
	};
	render() {
		return (
			<>
			{Loading.remove()}
				{this.props.quiz ? (
					<>
						<div className="container mt-4">
							<h1 className="display-5">
								{this.props.quiz.title}
							</h1>
							<div className="mt-6 ml-6 mr-6">
								<div className="row">
									<div className="col">
													<div
														className="col-md-6"
													>
														<h4 className="my-4">
															Question: {this.props.quiz.questions[this.state.currentQuestionIndex].title}
														</h4>
														
														<h4 className="my-4" id="timer">
															<div>Time remaining: {this.state.timer} seconds</div>
														</h4>
														
														<div className="row">
															{this.props.quiz.questions[this.state.currentQuestionIndex].options.map(
																(option, i) => {
																	
																	return (
																		<div
																			className="col-6 my-2"
																			key={
																				i
																			}
																		>
																			<div className="form-check">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					onChange={(
																						e
																					) =>
																						this.handleCheckbox(
																							e,
																							option,
																							this.state.currentQuestionIndex
																						)
																					}
																					// checked={this.state.questions[
																					// 	index
																					// ].answers.includes(
																					// 	option
																					// )}
																					id={i}
																				/>
																				<label
																					className="form-check-label"
																					htmlFor={i}
																				>
																					{
																						option
																					}
																				</label>
																			</div>
																		</div>
																	);
																}
															)}
														</div>
													</div>
								<button
									className = {this.state.currentQuestionIndex === (this.props.quiz.questions.length)-1 ? "btn btn-success mx-5 my-5":"d-none"}
									onClick={this.handleSubmitQuiz}
								>
									Submit
								</button>
								<button
									className = {this.state.currentQuestionIndex >= (this.props.quiz.questions.length)-1 ? "d-none":"btn btn-primary mx-5 my-5"}
									onClick={this.handleNextQuestion}
								>
									Next
								</button>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					Loading.dots()
				)}
			</>
		);
	}
}
function mapStateToProps({ quiz }) {
	if (quiz.quiz) {
		var updatedQuestions = quiz.quiz.questions.map((question) => {
			question.answers = [];
			return question;
		});
		return { quiz: { ...quiz.quiz, questions: updatedQuestions } };
	}
}

export default connect(mapStateToProps)(AttemptQuiz);