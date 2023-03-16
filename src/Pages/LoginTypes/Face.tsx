import React, { useState, useRef, useCallback, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";
import { PATHS } from "../../utils/constants";

const Face = () => {
  const navigate = useNavigate();
  // ! useCase of useLocalStorage Hook
  // const [{ identityNumber }] = useLocalStorage("Details");
  const [croppedImage, setCroppedImage] = useState<string>("");
  const [cropped, setCropped] = useState<boolean>(false);
  const webcamRef = useRef<any>(null);
  const [image, setImage] = useState<string | any>("");
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef<any>(null);

  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices],
  );

  //   ! Functionality

  const handleCropChange = useCallback(() => {
    const croppedImgData = imgRef.current.cropper
      .getCroppedCanvas()
      .toDataURL("image/jpeg", 1);
    setCroppedImage(croppedImgData);
    // console.log(imgRef)
  }, []);

  const cropImage = () => {
    setImage(croppedImage);
    setCropped(true);
  };

  const capture = useCallback(() => {
    setImage(webcamRef!.current!.getScreenshot());
  }, [webcamRef]);

  const handleNext = useCallback(() => {
    navigate(PATHS.dashboard);
  }, [navigate]);

  const retake = () => {
    setCroppedImage("");
    setImage("");
    setCropped(false);
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <div>
      <div
        className='d-flex justify-content-center align-items-center'
        id='contentContainer'
      >
        {isLoading ? (
          <Box sx={{ margin: "30%", marginLeft: "45%" }}>
            <CircularProgress color='primary' />
          </Box>
        ) : (
          <div id='containerRight'>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignContent={"center"}
              justifyContent={"center"}
              height={"20.9rem"}
              width={"100%"}
              marginTop={"2rem"}
            >
              {!image?.length ? (
                <Webcam
                  audio={false}
                  height={300}
                  ref={webcamRef}
                  screenshotFormat='image/jpeg'
                  width={500}
                  style={{
                    borderRadius: 5,
                  }}
                  //videoConstraints={videoConstraints}
                  videoConstraints={{
                    width: 519,
                    height: 400,
                    //facingMode,
                    deviceId,
                  }}
                />
              ) : (
                <Box marginTop={".5rem"}>
                  {cropped && croppedImage?.length ? (
                    <img
                      alt='sda'
                      style={{
                        width: imgRef?.current?.cropper?.cropBoxData?.width,
                        height: imgRef?.current?.cropper?.cropBoxData?.height,
                      }}
                      src={croppedImage}
                    />
                  ) : (
                    <Cropper
                      cropend={() => handleCropChange()}
                      ref={imgRef}
                      src={image as string}
                      zoomable={false}
                      autoCropArea={-0.01}
                      background={false}
                    />
                  )}
                </Box>
              )}
            </Box>

            <Box
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              {/* //! image.length !== 0 ? "Capture-btn" : "Retake-btn"   */}
              {!image?.length ? (
                <Button
                  variant={"contained"}
                  style={{
                    background: "#F1AB15",
                    fontSize: "1.125rem",
                    boxShadow: "unset",
                    height: "2.8rem",
                    borderRadius: "16px",
                    width: "26rem",
                    marginLeft: "1rem",
                  }}
                  onClick={() => {
                    capture();
                  }}
                >
                  Capture
                </Button>
              ) : (
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    marginTop: "2rem",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant={"contained"}
                    style={{
                      background: "#F1AB15",
                      fontSize: "1.125rem",
                      boxShadow: "unset",
                      height: "2.8rem",
                      borderRadius: "16px",
                      width: "26rem",
                      marginRight: "2rem",
                    }}
                    onClick={() => {
                      retake();
                    }}
                  >
                    Re-take
                  </Button>

                  {/* //! cropper  === true ? "Continue-btn" : "Crop-btn"   */}

                  {cropped ? (
                    <Button
                      variant={"contained"}
                      style={{
                        background: "#F1AB15",
                        fontSize: "1.125rem",
                        boxShadow: "unset",
                        height: "2.8rem",
                        borderRadius: "16px",
                        width: "26rem",
                      }}
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      variant={"contained"}
                      style={{
                        background: "#F1AB15",
                        fontSize: "1.125rem",
                        boxShadow: "unset",
                        height: "2.8rem",
                        borderRadius: "16px",
                        width: "26rem",
                      }}
                      onClick={() => {
                        cropImage();
                      }}
                    >
                      Crop
                    </Button>
                  )}
                </Box>
              )}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default Face;
