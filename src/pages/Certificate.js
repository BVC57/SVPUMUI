import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import CertificateImage1 from "../Images/apres.jpg";
import CertificateImage2 from "../Images/eom.jpg";
import CertificateImage3 from "../Images/exl.jpg";
import CertificateImage4 from "../Images/intrn.png";
import CertificateImage5 from "../Images/award.jpg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Margin } from "@mui/icons-material";
import Signature from './Signature';

function getSteps() {
  return ["Select Certificate", "Fill Details", "Issue"];
}


function getStepContent(stepIndex, handleNext, handleBack) {
  
  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={1}>
          <Grid item xs={4} className="cimage">
            <img
              src={CertificateImage1}
              alt="Certificate 1"
              onClick={handleNext}
              style={{ height: "70%", width: "70%", cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={4} className="cimage">
            <img
              src={CertificateImage2}
              alt="Certificate 2"
              onClick={handleNext}
              style={{ height: "70%", width: "70%", cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={4} className="cimage">
            <img
              src={CertificateImage3}
              alt="Certificate 3"
              onClick={handleNext}
              style={{ height: "70%", width: "70%", cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={4} className="cimage">
            <img
              src={CertificateImage4}
              alt="Certificate 4" className="cimage"
              onClick={handleNext}
              style={{ height: "70%", width: "70%", cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={4} className="cimage">
            <img
              src={CertificateImage5}
              alt="Certificate 5"
              onClick={handleNext}
              style={{ height: "70%", width: "70%", cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={4} className="cimage">
            <img
              src={CertificateImage5}
              alt="Certificate 5"
              onClick={handleNext}
              style={{ height: "70%", width: "70%", cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      );
    case 1:
      const getval = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        const nid = document.getElementById('id').value;
        const nname = document.getElementById('name').value;
        const nemail = document.getElementById('email').value;
        const ntitle = document.getElementById('title').value;
        const ndate = document.getElementById('date').value;
        console.log(nid,nname,nemail,ntitle,ndate);
      }
      return (
        <div className="fillinput">
          <div className="filldetail">
            <Grid container spacing={2}>
              {/* <span>Enter ID</span> */}
              <Grid item xs={12}>
                <TextField required label="Id" id="id" style={{ width: "30%" }} />
              </Grid>
              {/* <span>Enter Name</span> */}
              <Grid item xs={12}>
                <TextField required label="Name" id="name" style={{ width: "30%" }} />
              </Grid>
              {/* <span>Enter Email</span> */}
              <Grid item xs={12}>
                <TextField required label="Email" id="email" style={{ width: "30%" }} />
              </Grid>
              {/* <span>Enter Title</span> */}
              <Grid item xs={12}>
                <TextField required label="Title" id="title" style={{ width: "30%" }} />
              </Grid>
              {/* <span>Select Issue Date</span> */}
              <Grid item xs={12}>
                <TextField required type="date" id="date" style={{ width: "30%" }} />
              </Grid>
            </Grid>
          </div>
          <div className="fillsign">
            <Signature/>
          </div>
          <div>
              <Button   onClick={handleBack} style={{ border: '1px solid #1976d2', top:'25px', right:"10px", color:"#1976d2"}}>Back</Button>
              <Button variant="contained" color="primary" onClick={getval} style={{ top:'25px' }}>
                Next
              </Button>
            </div>
        </div>
      );
    case 2:
      return <Typography variant="h6">Mint NFT</Typography>;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  

  return (
    <div style={{ width: "100%" }}>
      <div className="stepicon"> 
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label,index) => (
          <Step key={label} style={{ width: "80px", height: "80px"}}>
            <StepLabel
        completed={index < activeStep ? 'true' : 'false'}
        icon={index < activeStep ? <CheckCircleIcon style={{ color: 'green' }} /> : null}
      >
        <div className="sltext">
        {label}
        </div>
        </StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div style={{ textAlign: "center" }}>
          <Box
            bgcolor="#1976d2"
            p={2}
            borderRadius={2}
            color="white"
            width="80%" // Adjust width as needed, e.g., '90%' for wider screens
            maxWidth={400} // Adjust maxWidth as needed for smaller screens
            mx="auto"
            my={4} // Adjust vertical margin as needed
          >
            <Typography variant="h4">
              Your Request Is In Minting Process
            </Typography>
            <br />
            <br />
            <Typography variant="h6">
              (Please Check Your Email After a Few Minutes)
            </Typography>
          </Box>
        
          <Button onClick={handleReset} style={{ border: '1px solid #1976d2', marginTop: '10px' }}>
            Go To Home
          </Button>
        </div>
        
        ) : (
          <div>
            <Typography>
              {getStepContent(activeStep, handleNext, handleBack)}
            </Typography>
            
          </div>
        )}
      </div>
    </div>
  );
}
