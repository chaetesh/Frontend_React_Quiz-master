import React from "react";
import { Link } from "react-router-dom";
import { userSignup } from "../../state/actions/authActions";
import Notiflix from 'notiflix';

class Signup extends React.Component {
  constructor(props){
    super(props);
  }
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

    if(this.state.name.length <= 2){
      Notiflix.Notify.warning('Name Must be atleast 3 Charecters!');
      return;
    }
    if(!this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      Notiflix.Notify.warning('Please enter Correct email adderss!');
      return;
    }
    if(this.state.password.length <= 5){
      Notiflix.Notify.warning('Password Must be atleast 6 Charecters!');
      return;
    }
    if(this.state.password.length <= 4){
      Notiflix.Notify.warning('Please enter Correct UPI details');
      return;
    }

    // validation is missing
    // For SigningUp
        var res = await userSignup(this.state);
        console.log("res: ",res);
        if(res){
          Notiflix.Notify.success('SignedUp Succesfully, Please Login');
          this.props.history.push("/login");
        }
        else{
          Notiflix.Notify.warning('Something Went Wrong!!, Please try again');
        }
  };
  render() {
    return (
      <section className="girl_image" style={{backgroundSize:'cover',height:'91vh'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto position-absolute" style={{right:"0"}}>
              <div className="text-white card-signin my-5">
                <div className="card-body">
                  <h1 className="text-center mb-4" style={{fontSize:"1.5rem"}}>Register</h1>
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
                      <label htmlFor="inputgPay">Gpay Address - Please enter the correct UPI address</label>
                    </div>

                    <button
                      onClick={(e) => this.handleSubmit(e)}
                      className="btn btn-lg btn-primary btn-block text-uppercase my-4"
                      type="submit">
                      Signup
                    </button>
                  </form>
                  <h5 className="my-2">
                    {" "}
                    Already has an account. <Link to="/login"> Login</Link>
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

export default Signup;
