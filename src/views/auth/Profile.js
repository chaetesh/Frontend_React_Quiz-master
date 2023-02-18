import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <>
      {/* <div>This is Profile belongs to {props.currentUser.name}</div> */}
{console.log("prfile",props)}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{props.currentUser.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{props.currentUser.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Id</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{props.currentUser._id}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gpay - UPI</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{props.currentUser.gPay}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ quiz, currentUser }) => {
  return {
    quizzes: quiz.quizList.quizzes,
    currentUser: currentUser.userInfo,
  };
};

export default connect(mapStateToProps)(Profile);
