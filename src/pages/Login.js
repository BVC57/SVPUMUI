import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import logo from "../Images/logo.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedValues = [...otpValues];
      updatedValues[index] = value;
      setOtpValues(updatedValues);
      if (value !== "") {
        const nextIndex = index + 1;
        if (nextIndex < otpValues.length) {
          const nextInput = document.getElementById(`otpInput${nextIndex + 1}`);
          if (nextInput) {
            nextInput.focus();
          }
        }
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace") {
      const updatedValues = [...otpValues];
      updatedValues[index] = "";
      setOtpValues(updatedValues);
      const prevIndex = index > 0 ? index - 1 : 0;
      const prevInput = document.getElementById(`otpInput${prevIndex + 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleClick = () => {
    // Resend OTP logic here
    setOpenDialog(true); // Open dialog when clicking Resend OTP
  };

  const handleLogin = () => {
    navigate("/");
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close dialog
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "50%",
        width: "50%",
        padding:"15px",
        border: "1px solid black",
        marginLeft: "250px",
        backgroundColor:"dominant",
        borderRadius:"20px"
      }}>
      <Grid item xs={12} sm={6}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item >
            <img src={logo} alt="logo" />
            <Typography variant="h4">Saksham</Typography>
          </Grid>
          <Grid container spacing={2} style={{marginTop:"5px"}}>
            <Grid item xs={4} style={{ marginLeft:"4%" }}>
              <TextField
                label="Enter Your Email"
                variant="outlined"
                style={{ width: "315%" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {otpValues.map((value, index) => (
                <Grid item xs={2} key={index}>
                  <TextField
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    style={{ width: "100%" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item style={{marginLeft:"70%"}}>
            <Link href="#" onClick={handleClick} style={{ textDecoration:"none" }}>
              Resend OTP
            </Link>
          </Grid>
          <Grid item style={{marginLeft:"-75%"}}>
            <div className="lbtn">
            <Button
              variant="contained"
              color="primary"
              style={{width:"460%"}}
              onClick={handleLogin}>
              Login
            </Button>
            </div>
          </Grid>
          <Grid item>
            <div className="lta">
            <Typography>
              Don't have an account?{" "}
              <Link href="/signup" onClick={() => navigate("/signup")}>
                Sign up
              </Link>
            </Typography>
            </div>
          </Grid>
          {errorMessage && (
            <Grid item>
              <Typography style={{ color: "red" }}>{errorMessage}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* Dialog component for displaying popup box */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Resend OTP</DialogTitle>
        <DialogContent>
          <Typography>
            OTP resent successfully. Check your email for the new OTP.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default SignupPage;
