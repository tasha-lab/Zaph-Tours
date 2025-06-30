import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

const Newsletter = () => {
  return (
    <>
      <Box>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "12rem",
            padding: "3rem 0",
          }}
        >
          <Box>
            <Typography variant="h2">Newsletter</Typography>
            <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
              Stay in the Loop!
            </Typography>
            <Typography variant="body1">
              Get the latest travel deals, destination highlights, and exclusive
              offers delivered straight to your inbox.
              <br />
              Join the Zaph Tours community — adventure starts here!
            </Typography>
          </Box>
          <Stack sx={{ gap: "1.5rem", width: "20rem" }}>
            <TextField label="Enter your Email" />
            <Button variant="contained">subscribe</Button>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default Newsletter;
