import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

const Wellness = () => {
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
            wellness tours
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
            for just($1050pc-$3500pc)
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{ p: "0 2rem 1rem 2rem", fontSize: "1rem" }}
        >
          Rejuvenate your body and mind with yoga, spa treatments, nature walks,
          and organic meals. Set in tranquil environments like forests or
          coastal sanctuaries, these retreats help you disconnect and recharge.
        </Typography>
        <Box sx={{ p: "0 3rem " }}>
          <Grid container sx={{ display: "flex", gap: "1.5rem" }}>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/well1.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/well2.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/well3.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/well4.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Wellness;
