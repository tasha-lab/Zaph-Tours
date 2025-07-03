import { AppBar, Toolbar, Box, Stack, Link } from "@mui/material";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
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
        <Stack direction="row" spacing={2} sx={{ marginRight: 9,flexWrap:'wrap' }}>
          <Link
            href="/"
            underline="none"
            variant="body1"
            sx={{ color: "text.primary", fontSize: "1.2rem" }}
          >
            Home
          </Link>
          <Link
            href="/Destinations"
            underline="none"
            variant="body1"
            sx={{ color: "text.primary", fontSize: "1.2rem" }}
          >
            Destination
          </Link>
          <Link
            href="/Trips"
            underline="none"
            variant="body1"
            sx={{ color: "text.primary", fontSize: "1.2rem" }}
          >
            Trips
          </Link>
          <Link
            href="/Contacts"
            underline="none"
            variant="body1"
            sx={{ color: "text.primary", fontSize: "1.2rem" }}
          >
            Contact us
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Navbar;
