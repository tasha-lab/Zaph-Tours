import { AppBar, Toolbar, Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      sx={{ height: "5rem", bgcolor: "secondary.main", position: "relative" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "6rem",
            height: "100%",
            m: "1rem",
            justifyContent: "space-between",
            marginLeft: 9,
          }}
          // border='2px solid red'
        >
          <img
            src="/images/ICON.png"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Stack direction="row" spacing={2} sx={{ marginRight: 9 }}>
          <Button component={Link} to="/" sx={{ color: "text.primary" }}>
            Home
          </Button>
          <Button
            component={Link}
            to="/Destinations"
            sx={{ color: "text.primary" }}
          >
            Destinations
          </Button>
          <Button component={Link} to="/Trips" sx={{ color: "text.primary" }}>
            Our Trips
          </Button>
          <Button
            component={Link}
            to="/Contacts"
            sx={{ color: "text.primary" }}
          >
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
