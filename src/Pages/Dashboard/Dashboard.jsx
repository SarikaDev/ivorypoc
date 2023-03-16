import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
const Dashboard = () => {
  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down("md"));
  console.log("downLg:", downLg);

  return (
    <>
      <Typography variant='h4' sx={{ mb: 3 }} textAlign={"left"}>
        Services Available
      </Typography>
      <Grid container>
        <Grid container display={"flex"} justifyContent={"center"} gap={15}>
          <Grid item>
            <Card sx={{ width: "15rem" }}>
              <CardContent
                sx={{
                  border: "2px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <DescriptionIcon style={{ height: "4rem", width: "4rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Documents
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ width: "15rem" }}>
              <CardContent
                sx={{
                  border: "2px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <DescriptionIcon style={{ height: "4rem", width: "4rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Documents
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {/* <Button size="small">Share</Button> */}
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: "15rem" }}>
              <CardContent
                sx={{
                  border: "2px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <DescriptionIcon style={{ height: "4rem", width: "4rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Documents
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant='h4'
        sx={{ mt: 3, mb: 3, paddingLeft: 1.8 }}
        textAlign={"left"}
      >
        Recently Used
      </Typography>
      <Grid container>
        <Grid
          container
          display={"flex"}
          justifyContent={"flex-start"}
          gap={2}
          sx={{ pl: 13 }}
        >
          <Grid item>
            <Card sx={{ width: "15rem" }}>
              <CardContent
                sx={{
                  border: "2px solid burlywood",
                  backgroundColor: "#EFEFF1",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <DescriptionIcon style={{ height: "4rem", width: "4rem" }} />
                </Box>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  marginTop={"1rem"}
                  style={{ textAlign: "center" }}
                >
                  Documents
                </Typography>
                <Typography variant='body2' color='text.secondary'></Typography>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
