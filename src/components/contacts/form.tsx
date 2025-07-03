import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

const ContactForm = () => {
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
          Reach out to us
        </Typography>
        <Grid container justifyContent={"center"} mb={"2rem"} mt={"2rem"}>
          <Grid size={{ xs: 10, md: 4 }} component={"form"}>
            <Stack spacing={2}>
              <TextField label="Enter your name" />
              <TextField label="Email subject" />
              <TextField minRows={5} multiline label="Your message" />
              <Button type="submit" variant="contained">Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactForm;
