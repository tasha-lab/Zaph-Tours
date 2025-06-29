import { Box, Typography } from "@mui/material";

const TripsHeading = () => {
  return (
    <>
      <Box>
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
      </Box>
    </>
  );
};

export default TripsHeading;
