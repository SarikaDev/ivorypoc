import { useState, useCallback, useEffect } from "react";
// import LoadingSpinner from "../../components/Common/Spinner";
import image from "../../assets/app_logo.png";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isValid, setValid] = useState(false);

  const validate = useCallback(() => {
    return mobile.length;
  }, [mobile.length]);

  useEffect(() => {
    if (mobile.length === 9) {
      const isValid = validate();
      setValid(isValid);
    }
  }, [mobile.length, validate]);

  const handleNumber = e => {
    if (!e.target.validity.patternMismatch) {
      setMobile(e.target.value);
    }
  };

  useEffect(() => {
    axios.defaults.headers.common.authorization = "";
    sessionStorage.clear();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      id='contentContainer'
    >
      <Box
        width={"65%"}
        height={"75%"}
        style={{ backgroundColor: "#f6f4ed" }}
        boxShadow={5}
        borderRadius={3}
        borderLeft={"10px solid #bd6100"}
        display={"flex"}
      >
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          {/* Hiiiii */}
          <img
            width={"50%"}
            src={image}
            alt='logo'
            style={{ marginTop: "-5rem" }}
          />
          <Typography
            fontWeight={600}
            textTransform={"uppercase"}
            marginTop={"1.5rem"}
            border={"1px solid black"}
            padding={"0.6rem"}
            borderRadius={"12px"}
            backgroundColor={"white"}
            fontSize={"1.2rem"}
            color={"#bd6100"}
          >
            République de Côte d'Ivoire
          </Typography>
          <Typography
            marginTop={"1rem"}
            fontWeight={600}
            width={"70%"}
            textAlign={"center"}
          >
            A single trusted digital identity for all citizens, residents and
            visitors.
          </Typography>
        </Box>
        <Box
          borderRight={"1px solid #bd6100"}
          height={"88%"}
          marginTop={"3.5%"}
        ></Box>
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography color={"#bd6100"} fontSize={"1.8rem"} fontWeight={600}>
              Login to smart services
            </Typography>
            <Typography
              color={"#bd6100"}
              fontWeight={600}
              textAlign={"center"}
              marginTop={"2rem"}
            >
              Please Enter Document Number
            </Typography>
            <TextField
              color={"info"}
              type='text'
              variant='outlined'
              style={{ width: "80%", marginTop: "1rem" }}
              label={"Document Number"}
            />
            <Button
              style={{
                width: "80%",
                marginTop: "1rem",
                backgroundColor: "#bd6100",
                color: "white",
              }}
              onClick={() => {
                navigate(PATHS.face);
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
