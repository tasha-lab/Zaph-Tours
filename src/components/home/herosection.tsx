import { Box, Slide, Toolbar, Typography } from "@mui/material";

const Herosection = () => {
  return (
    <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "75rem",
          height: "30rem",
          marginBottom: "2rem",
          marginTop: "2rem",
          position: "relative",
          
        }}
      >
        <img
          src="/images/hero1.jpg"
          alt="hero-image"
          style={{
            width: "100%",
            borderRadius: ".6rem",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Slide direction="down" in timeout={1800}>
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            fontSize: "7rem",
            color: "text.primary",
            top: "25%",
            left: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Best safaris and adventures
        </Typography>
        </Slide>
      </Box>
    </Toolbar>
  );
};

export default Herosection;
