import React, { useState,useRef } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  TextField,
  Box,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogActions,
} from "@mui/material";
import CertificateImage1 from "../Images/image1.jpg";
import CertificateImage2 from "../Images/image2.jpg";
import CertificateImage3 from "../Images/image3.jpg";
import CertificateImage4 from "../Images/image4.png";
import CertificateImage5 from "../Images/image5.png";
import CertificateImage6 from "../Images/image6.jpg";
import CertificateImage7 from "../Images/image7.jpg";
import CertificateImage8 from "../Images/image8.jpg";
import CertificateImage9 from "../Images/image9.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Signature from "./Signature";

function getSteps() {
  return ["Select Certificate", "Fill Details", "Issue"];
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [iname, setiname] = useState(null);
  const [newsign, setnewsign] = useState(null);
  const [NewCertificate, setNewCertificate] = useState(null);
  const steps = getSteps();

  const getImageDataUrl = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = () => {
          const base64String = reader.result;
          resolve(base64String);
        };

        reader.onerror = () => {
          reject(new Error("Failed to read the file"));
        };

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error fetching or converting image:", error);
      return null;
    }
  };

  const handleImageClick = async (imageUrl, imageName) => {
    try {
      const base64DataUrl = await getImageDataUrl(imageUrl);
      setSelectedImage(base64DataUrl);
      setiname(imageName);
      // console.log(base64DataUrl)

      handleNext();
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  };

  const draw = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    canvas.removeEventListener("mousemove", draw);
    canvas.removeEventListener("mouseup", stopDrawing);
    canvas.removeEventListener("mouseout", stopDrawing);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSignature = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");
    console.log("Downloadeded signature");
    setnewsign(dataUrl);
    // Create a temporary anchor element
    // const downloadLink = document.createElement("a");
    // downloadLink.href = dataUrl;
    // downloadLink.download = "signature.png"; // Set desired filename for download
    // document.body.appendChild(downloadLink);

    // // Simulate a click on the anchor element to trigger the download
    // downloadLink.click();

    // // Clean up: remove the temporary anchor element
    // document.body.removeChild(downloadLink);
  };

  // this function user for set details on image 1
  function handleDetail1(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 160, 220);
      ctx.fillText(`${ntitle}`, 180, 305);
      ctx.fillText(`${ndate}`, 80, 395);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 280, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }

  // this function user for set details on image 2
  function handleDetail2(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 30, 200);
      ctx.fillText(`${ntitle}`, 30, 305);
      ctx.fillText(`${ndate}`, 10, 430);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 140, 370, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }

  // this function user for set details on image 3
  function handleDetail3(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 140, 200);
      ctx.fillText(`${ntitle}`, 210, 270);
      ctx.fillText(`${ndate}`, 140, 360);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 70, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }

  // this function user for set details on image 4
  function handleDetail4(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 170, 230);
      ctx.fillText(`${ntitle}`, 200, 240);
      ctx.fillText(`${ndate}`, 100, 260);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 160, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }

  // this function user for set details on image 5
  function handleDetail5(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 160, 220);
      ctx.fillText(`${ntitle}`, 180, 305);
      ctx.fillText(`${ndate}`, 80, 395);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 280, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }

  // this function user for set details on image 6
  function handleDetail6(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 160, 220);
      ctx.fillText(`${ntitle}`, 180, 305);
      ctx.fillText(`${ndate}`, 80, 395);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 280, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }


  // this function user for set details on image 6
  function handleDetail7(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 160, 220);
      ctx.fillText(`${ntitle}`, 180, 305);
      ctx.fillText(`${ndate}`, 80, 395);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 280, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }


  // this function user for set details on image 6
  function handleDetail8(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 160, 220);
      ctx.fillText(`${ntitle}`, 180, 305);
      ctx.fillText(`${ndate}`, 80, 395);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 280, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }


  // this function user for set details on image 6
  function handleDetail9(nid, nname, nemail, ntitle, ndate, selectedImage, usersign) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px bold";
      ctx.fillStyle = "black";
      ctx.fillText(`${nname}`, 160, 220);
      ctx.fillText(`${ntitle}`, 180, 305);
      ctx.fillText(`${ndate}`, 80, 395);

      const signatureImg = new Image();
      signatureImg.onload = function () {
        ctx.drawImage(signatureImg, 280, 330, 200, 100);

        const canvasDataURL = canvas.toDataURL("image/png");
        setNewCertificate(canvasDataURL);
      };

      signatureImg.src = usersign;
    };

    img.src = selectedImage;
  }
   
  function getStepContent(stepIndex, handleNext, handleBack) {
    switch (stepIndex) {
      case 0:
        return (
          <Grid container spacing={1} style={{ caretColor: "transparent"}}>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage1}
                alt="Certificate 1"
                onClick={() => handleImageClick(CertificateImage1, "image1")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage2}
                alt="Certificate 2"
                onClick={() => handleImageClick(CertificateImage2, "image2")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage3}
                alt="Certificate 3"
                onClick={() => handleImageClick(CertificateImage3, "image3")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage4}
                alt="Certificate 4"
                className="cimage"
                onClick={() => handleImageClick(CertificateImage4, "image4")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage5}
                alt="Certificate 5"
                onClick={() => handleImageClick(CertificateImage5, "image5")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage6}
                alt="Certificate 5"
                onClick={() => handleImageClick(CertificateImage6, "image6")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage7}
                alt="Certificate 5"
                onClick={() => handleImageClick(CertificateImage7, "image7")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage8}
                alt="Certificate 5"
                onClick={() => handleImageClick(CertificateImage8, "image8")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={4} className="cimage">
              <img
                src={CertificateImage9}
                alt="Certificate 5"
                onClick={() => handleImageClick(CertificateImage9, "image9")}
                style={{ height: "70%", width: "70%", cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        );
      case 1:
        const getval = () => {
          const nid = document.getElementById("id").value;
          const nname = document.getElementById("name").value;
          const nemail = document.getElementById("email").value;
          const ntitle = document.getElementById("title").value;
          const ndate = document.getElementById("date").value;
          console.log(nid, nname, nemail, ntitle, ndate);
          console.log("Selected Image Name:", iname);
          if (iname === "image1") {
            handleDetail1(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image2") {
            handleDetail2(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image3") {
            handleDetail3(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image4") {
            handleDetail4(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image5") {
            handleDetail5(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image6") {
            handleDetail6(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image7") {
            handleDetail7(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image8") {
            handleDetail8(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          } else if (iname === "image9") {
            handleDetail9(nid, nname, nemail, ntitle,ndate, selectedImage, newsign);
          }else {
            alert("pls select any images");
          }
          handleNext();
        };

        return (
          <div className="fillinput">
            <div className="filldetail">
              <Grid container spacing={2}>
                {/* <span>Enter ID</span> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Id"
                    id="id"
                    style={{ width: "30%" }}
                  />
                </Grid>
                {/* <span>Enter Name</span> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Name"
                    id="name"
                    style={{ width: "30%" }}
                  />
                </Grid>
                {/* <span>Enter Email</span> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Email"
                    id="email"
                    style={{ width: "30%" }}
                  />
                </Grid>
                {/* <span>Enter Title</span> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Title"
                    id="title"
                    style={{ width: "30%" }}
                  />
                </Grid>
                {/* <span>Select Issue Date</span> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    type="date"
                    id="date"
                    style={{ width: "30%" }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="fillsign">
              {/* <Signature /> */}
              <div id="drawsign">
                <Typography variant="h6" className="signhead">
                  Draw Signature In Center
                </Typography>
                <canvas
                  id="signature-pad"
                  className="sp"
                  ref={canvasRef}
                  width={365}
                  height={200}
                  style={{ border: "1px solid #000", marginTop: "10px" }}
                  onMouseDown={startDrawing}
                />
                <div className="wc" style={{ marginTop: "10px" }}>
                  <Button
                    variant="contained"
                    onClick={clearCanvas}
                    style={{ marginRight: "10px" }}>
                    Clear
                  </Button>
                  <Button variant="contained" onClick={downloadSignature}>
                    Download
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Button
                onClick={handleBack}
                style={{
                  border: "1px solid #1976d2",
                  top: "25px",
                  right: "10px",
                  color: "#1976d2",
                }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={getval}
                style={{ top: "25px" }}>
                Next
              </Button>
            </div>
          </div>
        );
      case 2:
        const Mint = () => {
          handleNext();
        };
        return (
          <div>
            <Typography variant="h6">Mint NFT</Typography>
            {/* Dialog to display selected image
            <Dialog
              open={selectedImage !== null}
              onClose={() => setSelectedImage(null)}>
              <DialogContent>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ width: "100%" }}
                  />
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedImage(null)} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog> */}
            <div className="showimg" style={{ caretColor: "transparent"}}>
              {selectedImage && (
                <img
                  src={NewCertificate}
                  alt="Selected"
                  style={{
                    width: "50%",
                    height: "50%",
                    border: "30px solid lightgray",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
            <Button
              onClick={handleBack}
              style={{
                border: "1px solid #1976d2",
                top: "25px",
                right: "10px",
                color: "#1976d2",
              }}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={Mint}
              style={{ top: "25px" }}>
              Next
            </Button>
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  }
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
          {steps.map((label, index) => (
            <Step key={label} style={{ width: "80px", height: "80px" }}>
              <StepLabel
                completed={index < activeStep ? "true" : "false"}
                icon={
                  index < activeStep ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : null
                }>
                <div className="sltext">{label}</div>
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

            <Button
              onClick={handleReset}
              style={{ border: "1px solid #1976d2", marginTop: "10px" }}>
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
