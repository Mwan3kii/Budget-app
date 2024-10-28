import React, { useState, useEffect } from "react";
import { loginUser } from "../Redux/Auth/LoginUser";
import { useDispatch, useSelector } from "react-redux";
import "../Authentication/Auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error, user } = useSelector((state) => state.loginuser);
  const [values, setValues] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user logged-in"));
    if (localUser?.token && success) {
      navigate("/home");
    }
  }, [success, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (values.email && values.password) {
      dispatch(loginUser(values));
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {loading && <div className="spinner-border"></div>}
        {error && <div className="error-message">{error}</div>}
          <>
            <input
              className="form-field"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <input
              className="form-field"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
            {submitted && !values.email && (
              <span id="email-error">Please enter email</span>
            )}
            {submitted && !values.password && (
              <span id="password-error">Please enter password</span>
            )}
            <button className="form-field" type="submit" disabled={loading}>
              Login
            </button>
          </>
      </form>
    </div>
  );
};

export default Login;
