import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

const CulinaryTours = () => {
  return (
    <>
      <Box paddingTop={"2rem"} paddingBottom={"2rem"}>
        <Stack
          direction={"row"}
          height={"5rem"}
          sx={{ justifyContent: "space-between", padding: "0 2rem" }}
        >
          <Typography
            variant="h2"
            sx={{ textDecoration: "underline", textTransform: "capitalize" }}
          >
            Culinary tours
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            for just($2050pc-$5500pc)
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{ p: "0 2rem 1rem 2rem", fontSize: "1rem" }}
        >
          Taste your way through Kenya with food-centered journeys. Learn to
          cook Swahili dishes, visit spice markets, and dine with locals. For
          foodies who want to experience culture one bite at a time.
        </Typography>
        <Box sx={{ p: "0 3rem " }}>
          <Grid container sx={{ display: "flex", gap: "1.5rem" }}>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/culinary1.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/culinary2.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/culinary3.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/culinary4.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CulinaryTours;
