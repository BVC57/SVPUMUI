import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";

import "../Styles/Global.css";
import Table from "../pages/Table";

const Verify = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== "") {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index] = value;
      setOtpValues(updatedOtpValues);
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otpValues[index] === "") {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index - 1] = "";
      setOtpValues(updatedOtpValues);
    }
  };

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const [selectedValue, setSelectedValue] = useState("All");
  const [selectedValuecountry, setSelectedValuecountry] = useState("USA");

  const handleChangepurpose = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangecountry = (event) => {
    setSelectedValuecountry(event.target.value);
  };

  return (
    <div className="vmain">
      <div className="vtophead">
        <Typography variant="h6">Credential</Typography>
        <div className="anbtn">
        <Button
          variant="contained"
          style={{
            marginLeft: "50px",
          }}
          onClick={togglePopup}>
          Add New
        </Button>
        </div>
      </div>
      <div className="vtable">
        <Table />
      </div>
      <Dialog
        open={openPopup}
        onClose={togglePopup}
        className="popup"
        style={{width:"40%", height:"100%",left:400,borderRadius:10}}
        BackdropProps={{
          sx: { backdropFilter: "blur(3px)" },
        }}>
        <DialogTitle style={{ fontSize:"25px", alignItems:"center" }}>Add New Credential</DialogTitle>
        <form noValidate autoComplete="off">
          <Grid container spacing={2} style={{ padding: "20px" }}>
            <Grid item xs={12}>
             <Typography variant="h6">Phone Number</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Select
                    value={selectedValuecountry}
                    onChange={handleChangecountry}
                    style={{ width: "50%", height:"40px", left:0 }}>
                    <MenuItem value="+1">USA</MenuItem>
                    <MenuItem value="+44">UK</MenuItem>
                    <MenuItem value="+91">IN</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-basic"
                    placeholder="+0000000000"
                    variant="outlined"
                    inputProps={{ maxLength: 10 }}
                    style={{ width: "170%", marginLeft: "-60%" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <div className="gotp">
                  <Button
                    variant="contained"
                    style={{ width: "80%", top: 1,left:"18px" }}>
                    Get OTP
                  </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                {otpValues.map((value, index) => (
                  <Grid item xs={2} key={index}>
                    <div className="ibox">
                    <TextField
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(index, e)}
                      onKeyDown={(e) => handleBackspace(index, e)}
                      variant="outlined"
                      inputProps={{ maxLength: 1 }}
                      style={{ width: "100%" }}
                    />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ display: "flex" }}>
              <a href="/" style={{ textDecoration: "none" }}>
                Resend OTP
              </a>
              <div className="votp">
              <Button variant="contained" style={{ width: "100%", left: 230 }}>
                Verify OTP
              </Button>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Purpose</Typography>
              <Select
                value={selectedValue}
                variant="outlined"
                onChange={handleChangepurpose}
                fullWidth>
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Study">Study</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Educational">Educational</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <div className="pcbtn">
              <Button
                variant="outlined"
                onClick={togglePopup}
                fullWidth
                style={{ marginTop: "10px",width:"40%", left:"55%" }}>
                Cancel
              </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="psbtn">
              <Button
                variant="contained"
                fullWidth
                style={{ marginTop: "10px", width:"40%"}}>
                Submit
              </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Dialog>
    </div>
  );
};

export default Verify;
