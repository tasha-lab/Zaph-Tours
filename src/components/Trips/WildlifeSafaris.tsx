import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

const WildlifeSafaris = () => {
  return (
    <>
      <Box paddingTop={"2rem"}>
        <Stack
          direction={"row"}
          height={"5rem"}
          sx={{ justifyContent: "space-between", padding: "0 2rem" }}
        >
          <Typography
            variant="h2"
            sx={{ textDecoration: "underline", textTransform: "capitalize" }}
          >
            wildlife safaris
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
          Track lions, elephants, rhinos, and more in world-renowned parks.
          Guided by expert trackers, you'll witness nature's drama unfold across
          Kenya’s iconic landscapes. Ideal for photographers, animal lovers, and
          first-time explorers.
        </Typography>
        <Box sx={{ p: "0 3rem " }}>
          <Grid container sx={{ display: "flex", gap: "1.5rem" }}>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/wildlife1.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/wildlife2.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/wildlife3.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/wildlife4.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default WildlifeSafaris;
