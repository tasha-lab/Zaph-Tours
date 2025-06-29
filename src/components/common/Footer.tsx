import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <AppBar
        sx={{
          height: "4rem",
          bgcolor: "primary.main",
          position: "relative",
          marginBottom: "0",
          top: "auto",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            &copy;made by T😒2025
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
