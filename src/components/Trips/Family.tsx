import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

const Family = () => {
  return (
    <>
      <Box paddingTop={"2rem"}>
        <Stack
          direction={"row"}
          height={"5rem"}
          sx={{ padding: "0 2rem", justifyContent: "space-between" }}
        >
          <Typography variant="h2" sx={{ textDecoration: "underline" }}>
            Family Package
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
            for just($1950pc-$4000pc)
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{ p: "0 2rem 1rem 2rem", fontSize: "1rem" }}
        >
          Create lifelong memories with curated family-friendly itineraries.
          From wildlife safaris to interactive cultural villages, there's
          something for every age. Safe accommodations, flexible pacing, and fun
          activities ensure smiles all around.
        </Typography>
        <Box sx={{ p: "0 3rem " }}>
          <Grid container sx={{ display: "flex", gap: "1.5rem" }}>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/family1.jpg"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/family2.jpg"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/family3.jpg"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/family4.jpg"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Family;
