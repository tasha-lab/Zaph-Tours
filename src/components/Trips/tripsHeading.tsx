import { Box, Slide, Typography } from "@mui/material";

const TripsHeading = () => {
  return (
    <>
      <Box>
        <Slide direction="right" in timeout={1800}>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 1,
            textDecoration: "underline",
          }}
        >
          Our Packages
        </Typography>
        </Slide>
      </Box>
    </>
  );
};

export default TripsHeading;
