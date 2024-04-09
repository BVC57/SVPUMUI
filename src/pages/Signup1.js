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
  Checkbox,
  FormControlLabel,
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
    <div className="reguser">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          width: "40%",
          padding: "20px",
          border: "1px solid black",
          marginLeft: "500px",
          backgroundColor: "dominant",
          borderRadius: "20px",
        }}>
        <Grid item>
          <img src={logo} alt="logo" />
          <Typography variant="h4">Saksham</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="PAN"
              placeholder="Enter PAN number"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Person"
              placeholder="Enter contact person"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Email"
              placeholder="Enter contact email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <div className="rpninput">
              <TextField
                label="Phone Number"
                placeholder="Enter phone number"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="rgotp">
              <Button
                variant="contained"
                color="primary"
                style={{ width: "50%", top: "10px", left: "20px" }}>
                Get OTP
              </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {otpValues.map((value, index) => (
                  <Grid item xs={2} key={index}>
                    <div className="rinput">
                    <TextField
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(index, e)}
                      onKeyDown={(e) => handleBackspace(index, e)}
                      variant="outlined"
                      inputProps={{ maxLength: 1 }}
                      style={{ width: "60%" }}
                    />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <div className="rvotp">
              <Button
                variant="contained"
                color="primary"
                style={{ width: "50%", left: "50%" }}>
                Verify OTP
              </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container item xs={12} justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox />}
                label="I Agree"
                sx={{ marginLeft: 0 }}
              />
            </Grid>
            <Grid item style={{ marginLeft: "80%", marginTop: "-90px" }}>
              <Link
                href="#"
                onClick={handleClick}
                style={{ textDecoration: "none" }}>
                Resend OTP
              </Link>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent="space-between">
            <Grid item>
              <Button variant="outlined" color="primary" fullWidth>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignupPage;
