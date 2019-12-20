import React from "react";
import { axiosWithAuth } from "./Utils/axiosWithAuth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      credentials: {
        username: "",
        password: ""
      }
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/colors");
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() { 
    return ( 
      <div className="container">
        <h1 className="title">Welcome to the Bubble App!</h1>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input type="text" name="username" placeholder="username" value={this.state.credentials.username} onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="password" value={this.state.credentials.password} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default Login;
