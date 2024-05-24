
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import "./signup.css";

import Swal from "sweetalert2";
import { Sigmar } from "next/font/google";



const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [role, setRole] = React.useState("");
  const [erroremail, seterroremail] = useState("");
  const [error, setError] = useState(false);

//   const navigate = useNavigate();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;

    // Validate that the phone number is a 10-digit number
    if (/^\d{10}$/.test(input)) {
      setPhoneNumberError(""); // Reset error state if valid
      setPhoneNumber(input);
      setPhone(input);
    } else {
      setPhoneNumberError("Phone number must be a 10-digit number.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.userLogout();
    if (phoneNumberError) {
      alert(phoneNumberError);
      return;
    }

    props.requestRegister({
      data: {
        name,
        phone,
        address,
        pincode,
        email,
        password,
        role
      },
    });
  };


  return (
    <div className="background">
      <Container component="main" maxWidth="xs">
        <div>
          {/* <Typography variant="h5">Registration</Typography> */}
          <form onSubmit={handleSubmit}>
             <TextField
              fullWidth
              label=" Full Name"
              type="text"
              required
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid black", // black border
                  borderRadius: "10px", // Border radius
                  color: "black", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Label color
                },
              }}
            />
{/*
            <TextField
              fullWidth
              label=" Phone Number"
              type="text"
              required
              placeholder="Phone"
              onChange={handlePhoneNumberChange}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid black", // black border
                  borderRadius: "10px", // Border radius
                  color: "black", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Label color
                },
              }}
            />
            {phoneNumberError && (
              <Typography
                variant="caption"
                style={{ color: "red", marginTop: "10px" }}
              >
                {phoneNumberError}
              </Typography>
            )}

            <TextField
              fullWidth
              label=" Address"
              type="text"
              required
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid black", // black border
                  borderRadius: "10px", // Border radius
                  color: "black", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Label color
                },
              }}
            />

            <TextField
              fullWidth
              label="Pin Code"
              type="text"
              required
              placeholder="Pin Code"
              onChange={(e) => setPincode(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid black", // black border
                  borderRadius: "10px", // Border radius
                  color: "black", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Label color
                },
              }}
            /> */}

            <TextField
              fullWidth
              label=" Email address"
              type="email"
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid black", // black border
                  borderRadius: "10px", // Border radius
                  color: "black", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "Black", // Label color
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              required
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              InputProps={{
                style: {
                  border: "1px solid black", // black border
                  borderRadius: "10px", // Border radius
                  color: "black", // Text color
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black", // Label color
                },
              }}
            />

            <br />
            <br />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>

            <Typography
              align="right"
              style={{ color: "black", fontSize: "16px" }}
            >
              Already have an account?{" "}
              <a href="/login" style={{ color: "black" }}>
                Log In
              </a>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default SignUp
