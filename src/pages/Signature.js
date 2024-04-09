import React, { useState, useRef } from 'react';
import { Button, Typography } from '@mui/material';
import '../Styles/Global.css';

const Signature = () => {
  const [signimagesrc, setsignimagesrc] = useState('');
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  };

  const draw = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('mouseup', stopDrawing);
    canvas.removeEventListener('mouseout', stopDrawing);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSignature = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');
    console.log('Download signature:', dataUrl);
    setsignimagesrc(dataUrl);
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = dataUrl;
    downloadLink.download = 'signature.png'; // Set desired filename for download
    document.body.appendChild(downloadLink);

    // Simulate a click on the anchor element to trigger the download
    downloadLink.click();

    // Clean up: remove the temporary anchor element
    document.body.removeChild(downloadLink);
  };

  return (
    <div id="drawsign">
      <Typography variant="h6" className="signhead">
        Draw Signature In Center
      </Typography>
      <canvas
        id="signature-pad"
        className='sp'
        ref={canvasRef}
        width={365}
        height={200}
        style={{ border: '1px solid #000', marginTop: '10px' }}
        onMouseDown={startDrawing}
      />
      <div className="wc" style={{ marginTop: '10px' }}>
        <Button variant="contained" onClick={clearCanvas} style={{ marginRight: '10px' }}>
          Clear
        </Button>
        <Button variant="contained" onClick={downloadSignature}>
          Download
        </Button>
      </div>
    </div>
  );
};

export default Signature;
