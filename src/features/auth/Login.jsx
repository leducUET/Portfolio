import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const initialState = { email: "", password: "" };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const { user } = useSelector((state) => state.auth);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // @ts-ignore
    dispatch(loginAsync({ email, password }));
  };

  if (user) {
    return <Navigate to="/admin" />;
  }
  return (
    <div className="login">
      <form action="" className="loginForm">
        <h1>Sign In</h1>
        <div className="loginContainer">
          <TextField
            className="input email"
            type="email"
            name="email"
            label="Email"
            onChange={handleOnChange}
            autoFocus
          />
          <TextField
            className="input password"
            type="password"
            name="password"
            label="Password"
            onChange={handleOnChange}
          />
          <Button
            type="submit"
            className="buttonSubmit"
            color="primary"
            variant="contained"
            onClick={handleOnSubmit}
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
