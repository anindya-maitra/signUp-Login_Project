import React, { useState, useRef } from 'react';
import './CameraTake.css';

const CameraTake = () => {
  const [snapshot, setSnapshot] = useState('');
  const [isCameraStarted, setIsCameraStarted] = useState(false);
  const videoRef = useRef(null);
  
  const handleSnapshot = async () => {
    if (!isCameraStarted) {
      alert('Please start the camera before taking a snapshot.');
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL('image/png');
    setSnapshot(data);
    console.log(data); // Log the data to the console
  };
  
  const handleRetake = () => {
    setSnapshot('');
    startCamera();
  };
  
  const handleStartCamera = () => {
    startCamera();
    setIsCameraStarted(true);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Failed to access the camera. Please check your permissions.');
    }
  };

  return (
    <div>
      <div className={`${!isCameraStarted ? true : false}`}>
        <div>
          {!isCameraStarted ? (
            <button class="startBtn" type="button" onClick={handleStartCamera}>
              Start Camera
            </button>
          ) : (
            <>
            
              {snapshot ? (
                <>
                <img src={snapshot} alt="Snapshot" width="300" height="200" />
                <div className='btnGrp'>
                  <button type="button" onClick={handleRetake}>
                    Retake
                  </button>
                  <button type="button">
                    Verify
                  </button>
                </div>
                </>
              ) : (
                <video ref={videoRef} height="200px" width="300px" autoPlay />
              )}
              
              {!snapshot && (
                <button type="button" onClick={handleSnapshot}>
                  Take Photo
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraTake;