import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

const Beach = () => {
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
            beach holidays
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
            for just($950pc-$2000pc)
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{ p: "0 2rem 1rem 2rem", fontSize: "1rem" }}
        >
          Unwind on Kenya’s white sandy beaches with turquoise waters and warm
          breezes. Enjoy snorkeling, dhow rides, seafood feasts, or simply soak
          in the sun. From Watamu to Diani, paradise is a wave away.
        </Typography>
        <Box sx={{ p: "0 3rem " }}>
          <Grid container sx={{ display: "flex", gap: "1.5rem" }}>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/beach1.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/beach2.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/beach3.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/beach4.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Beach;
