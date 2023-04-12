import React, { useState } from "react";
import Input from "./form/Input";
import { useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (email === "admin@example.com") {
      setJwtToken("abc");
    }
    console.table({ email, password })
    console.log()
  };
  return (
    <div className="col-md-6 offset-md-3 ">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          name="email"
          className="form-control"
          type="email"
          autoComplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Password"
          name="password"
          className="form-control"
          type="password"
          autoComplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
