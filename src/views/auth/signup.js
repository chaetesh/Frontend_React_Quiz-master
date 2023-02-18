import React from "react";
import { Link } from "react-router-dom";
import { userSignup } from "../../state/actions/authActions";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    gPay:"",
    isPosting: false,
    successMsg: "",
    errorMsg: "",
    check:false,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.isPosting) {
      return;
    }

    // validation is missing
    // For SigningUp
    setTimeout(async () => {
      var res = await userSignup(this.state);
      console.log(res);
      if(res){
        this.setState({
          successMsg: "Sign Up Succesfull"
        });
        }
        this.setState({ isPosting: false });
    }, 1000);
  };
  render() {
    return (
      <section className="bg_signup">
        <div className="container">
          <div style={{ background: "green", color: "white" }}>
            {this.state.successMsg}
          </div>
          <div style={{ background: "red", color: "white" }}>
            {this.state.errorMsg}
          </div>
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="text"
                        name="name"
                        id="inputUsername"
                        className="form-control "
                        placeholder="User Name"
                        value={this.state.username}
                        onChange={(e) => this.handleChange(e)}
                        required
                        autoFocus
                      />
                      <label htmlFor="inputUsername">Name</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={(e) => this.handleChange(e)}
                        required
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-control "
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        name="gPay"
                        id="inputgPay"
                        className="form-control "
                        placeholder="User Name"
                        value={this.state.gPay}
                        onChange={(e) => this.handleChange(e)}
                        required
                        autoFocus
                      />
                      <label htmlFor="inputUsername">Gpay Address - Please enter the correct UPI address</label>
                    </div>

                    <button
                      onClick={(e) => this.handleSubmit(e)}
                      className="btn btn-lg btn-primary btn-block text-uppercase my-4"
                      type="submit">
                      Signup
                    </button>
                  </form>
                  <div className="my-2">
                    {" "}
                    Already has an account. <Link to="/login"> Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
