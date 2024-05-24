import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import TextField from "@mui/material/TextField";

import Swal from "sweetalert2";
// import "./Admin.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorpassword, seterrorpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle show/hide password
  const [error, setError] = useState(false);
//   const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    props.requestAdminLogin({
      data: {
        email: email,
        password: password,
      },
    });
  }





  return (
    <div className="background-container">
      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh", // Center vertically
        }}
      >
        <div>
          <Typography
            variant="h5"
            style={{ textAlign: "center", fontSize: "30px", color: "black" }}
          >
            Admin Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email address"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "10px", // Set the border radius
                  color: "black",
                },
                notched: false, // Remove the notch border
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Set the label color to black
                },
              }}
              sx={{
                "& fieldset": {
                  borderColor: "black", // Set the border color to black
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"} // Show/hide password based on state
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              // style={{background: "black", borderRadius: "10px"}}
              InputProps={{
                style: {
                  borderRadius: "10px",
                  color: "black", // Set the border radius
                },
                notched: false, // Remove the notch border
                endAdornment: (
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ color: "black" }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </Button>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Set the label color to black
                },
              }}
              sx={{
                "& fieldset": {
                  borderColor: "black", // Set the border color to black
                },
              }}
            />

            {/* <Typography
              variant="body2"
              align="right"
              style={{ color: "black", fontSize: "16px" }}
            >
              <a
                href="/partnerforget"
                className="font-size-3 text-dodger line-height-reset"
                style={{ color: "black" }}
              >
                Forgot Password
              </a>
            </Typography> */}
            <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ borderRadius: "10px", height: "50px" }}
              >
                Login
              </Button>
            </div>
            {/* <Typography
              variant="body2"
              align="right"
              style={{ color: "black", fontSize: "16px" }}
            >
              Don't have an account?{" "}
              <a href="/partnersignup" style={{ color: "black" }}>
                Sign up
              </a>
            </Typography> */}
          </form>
        </div>
      </Container>
    </div>
  );
};
export default Login;

