import React from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const Signup1 = () => {
  const handleVerifyOTP = () => {
    // Handle verify OTP logic here
  };

  const handleResendOTP = () => {
    // Handle resend OTP logic here
  };

  return (
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
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            placeholder="Enter phone number"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth onClick={handleVerifyOTP}>
            Get OTP
          </Button>
        </Grid>
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
      <Grid container item xs={12} justifyContent="space-between">
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="I Agree"
            sx={{ marginLeft: 0 }}
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={handleResendOTP}>
            Resend OTP
          </Button>
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
  );
};

export default Signup1;
