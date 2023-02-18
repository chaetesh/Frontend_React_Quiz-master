import React from "react";
import { connect } from "react-redux";
import CreateQuiz from "../quiz/createQuiz";

const PaymentRoute = (props) => {
  // If paid can Attempt Quiz
  if (props.currentUser.userInfo.isPaid === true) {
    props.history.push("/quiz/63cebff0221f0a29f82ae63e");
  }
  if (props.currentUser.userInfo.superUser === true) {
    props.history.push("/quiz/new");
  }
  return (
    <>
    <div className="container my-3">
        <h2 className="my-3">Welcome {props.currentUser.userInfo.name}</h2>
        <p>You can start the quiz Competition by paying a small fee and be a winner of the Rs25,000.</p>
        <button type="button" className="btn btn-primary">Pay 50</button>
    </div>
      
    </>
  );
};

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}
export default connect(mapStateToProps)(PaymentRoute);
