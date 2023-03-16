// Drawer_Left_NavBar_Component
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";
// ! Re_usable Component
// import FlakyOutlinedIcon from "@mui/icons-material/FlakyOutlined";

const DrawList = ({ setIsOpen }) => {
  return (
    <Box
      sx={{
        width: "100%",
        ".MuiBox-root.css-ndow8k": {
          width: "280px",
        },
      }}
    >
      {/* <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={4}
      >
        <Avatar
          alt="profile_pic"
          src={face?.length ? `data:image/jpeg;base64,${face}` : profile_pic}
          sx={{
            width: "90px",
            height: "90px",
            objectFit: "cover",
          }}
        />
        <Typography
          fontSize={{ xs: 18, md: 16, lg: 18 }}
          variant="body2"
          textAlign={"center"}
        >
          {displayName}
        </Typography>

        <Typography
          fontSize={{ xs: 14, md: 14, lg: 14 }}
          variant="h6"
          color="#343434"
          sx={{ fontWeight: "500" }}
        >
          {roleName}
        </Typography>
        <Typography
          fontSize={{ xs: 14, md: 14, lg: 14 }}
          variant="h6"
          color="#343434"
          sx={{ fontWeight: "500" }}
        >
          {reportingRoleName}
        </Typography>

        <Typography
          fontSize={{ xs: 14, md: 14, lg: 14 }}
          variant="h6"
          color="#343434"
          sx={{ fontWeight: "500" }}
        >
          {branchName}
        </Typography>
      </Box> */}
      <Card sx={{ minWidth: 275, height: 200, marginTop: 3 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant='h5' component='div'>
            {/* be{bull}nev{bull}o{bull}lent */}
            Hello
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            adjective
          </Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
      {/* <Box sx={{ width: "100%", position: "relative" }}>
        <List component="nav">
          {roleBasedViewPoints[0]?.map((navItem, index) =>
            !!navItem?.children?.length ? (
              <CollapsableNav
                key={index}
                onClick={closeNavbar}
                primary={navItem?.title}
                links={navItem?.children}
                icon={navItem?.icon}
                root={navItem?.link}
              />
            ) : (
              <List>
                <Link to={navItem?.link} key={index}>
                  <ListItemButton
                    selected={navItem?.link === location.pathname}
                    onClick={closeNavbar}
                  >
                    <ListItemIcon>{navItem?.icon}</ListItemIcon>
                    <ListItemText primary={navItem?.title} />
                  </ListItemButton>
                </Link>
              </List>
            ),
          )}
        </List>
      </Box> */}
    </Box>
  );
};

export default DrawList;
