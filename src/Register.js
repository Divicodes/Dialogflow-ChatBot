import { Container, Button } from "react-bootstrap";
import React, { Component } from "react";
import Axios from "axios";
import { Navigate } from "react-router";
import moment from "moment";
import './Register.css'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      message: "",
      isSafe: false,

    };
  
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let data = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
      DOB: this.state.DOB,
      address: this.state.address,
      Mobile: this.state.mobile,
      types: this.state.types,
    };

    Axios.post("http://localhost:5001/register", data).then((response) => {
      console.log(response.data.message);
      if (response.data) {
        this.setState({
          message: response.data.message,
        });
      }
    });
  };

  render() {
    console.log(this.props);
    let redirectVar = null;

    if (this.state.message === "ok") {
      localStorage.setItem("register_status", "true");
      redirectVar = <Navigate to="/signin" />;
      alert("Registered successfully");
    } else if (this.state.message === "notok") {
      alert("Registration failed");
      redirectVar = <Navigate to="/" />;
    }
    return (
      <>
      
      <div className="Register">
        {redirectVar}
        <Container className="C">
          <div>
            <form style={{textAlign:"center"}} onSubmit={this.onSubmit}>
              <h3>Register</h3>
              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="Email"
                  onChange={this.onChange}
                  value={this.state.fields["Email"]}
                  required
                />
              </div>

              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="Password"
                  onChange={this.onChange}
                  value={this.state.fields["Password"]}
                  required
                />
              </div>
              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>First name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First name"
                  name="FirstName"
                  onChange={this.onChange}
                  value={this.state.fields["FirstName"]}
                  required
                />
              </div>
              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>Last name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last name"
                  name="LastName"
                  onChange={this.onChange}
                  value={this.state.fields["LastName"]}
                  required
                />
              </div>
              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>Date of Birth</label> */}
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter DOB"
                  name="DOB"
                  onChange={this.onChange}
                  value={this.state.fields["DOB"]}
                  max={moment().format("YYYY-MM-DD")}
                />
              </div>
              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>Address</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  onChange={this.onChange}
                  value={this.state.fields["address"]}
                />
              </div>

              <div className="form-group" style={{marginBottom:'20px'}}>
                {/* <label>Phone</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile Phone"
                  name="mobile"
                  onChange={this.onChange}
                  value={this.state.fields["mobile"]}
                  required
                />
              </div>
    
              <div className="registerButton">
                <Button type="submit" variant="primary" size="lg" active>
                  Register
                </Button>
                <div>
                  <p className="AlreadyRegistered">
                    Already registered? <a href="/signin">Signin</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>

      </>
    );
  }
}