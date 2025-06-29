import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

const Adventure = () => {
  return (
    <>
      <Box paddingTop={"2rem"}>
        <Stack
          direction={"row"}
          height={"5rem"}
          sx={{ justifyContent: "space-between", padding: "0 2rem" }}
        >
          <Typography variant="h2" sx={{ textDecoration: "underline" }}>
            Adventure
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
          For the thrill-seekers: climb mountains, zip through forests, raft
          down rivers, or hike off-grid trails. These tours are designed to test
          your limits and reward you with awe-inspiring moments in nature's
          rawest beauty.
        </Typography>
        <Box sx={{ p: "0 3rem " }}>
          <Grid container sx={{ display: "flex", gap: "1.5rem" }}>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/adventure1.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/adventure2.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/adventure3.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card sx={{ width: "15rem", height: "20rem" }}>
              <CardMedia
                component={"img"}
                src="/images/adventure4.avif"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Adventure;
