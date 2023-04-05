import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { Navigate } from "react-router";
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      slot: "",
      date: "",
      time: "",
      username:"",
    };
  }
  onChange = (e) => {
    console.log("e.target.name" + e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let data = {
      Email: this.state.Email,
      Password: this.state.Password,
    };
    Axios.post("http://localhost:5001/login", data).then((response) => {
      console.log(response.data);
      if (response.data) {
        console.log(response.data);
        this.setState({
          message: response.data.message,
          username: response.data.username,
        });
      }
    });
  };

  render() {
    let redirectVar = null;

    if (this.state.message === "ok") {
      localStorage.setItem("name",this.state.username);
      alert("Logged in successfully");
      redirectVar = <Navigate to="/chatbotlanding" />;
    } else if (this.state.message === "notok") {
      alert("Log in failed");
      redirectVar = <Navigate to="/" />;
    } 

    return (
      <>
      <div className="Login center-screen">
        {redirectVar}
        <Container className="C">
          <div className="">
            <form className="f" onSubmit={this.onSubmit}>
              <h3>Sign In</h3>
              
              <div className="form-group input" style={{marginBottom:'20px'}}>
                {/* <label>Email address</label> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="Email"
                  onChange={this.onChange}
                  value={this.state.fields["Email"]}
                />
              </div>

              <div className="form-group input">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="Password"
                  onChange={this.onChange}
                  value={this.state.fields["Password"]}
                />
              </div>

              <div className="buttonContainer">
                <button type="submit" className="btn btn-block" variant="primary" size="lg" active>
                  Log In
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      </>
    );
  }
}