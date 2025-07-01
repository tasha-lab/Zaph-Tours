import { Box, Grid, Stack, Typography } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Socialmedia = () => {
  return (
    <>
      <Box bgcolor={"background.default"} height={"4rem"} width={"100%"}>
        <Grid container justifyContent={"center"}>
          <Stack direction={"row"} gap={"10rem"}>
            <Stack>
              <Typography fontSize={"1.1rem"}>
                {" "}
                <FaInstagram /> Instagram
              </Typography>
              <Typography fontSize={"1.1rem"}>
                <FaLinkedin /> LinkedIn
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize={"1.1rem"}>
                <FaFacebookF /> Facebook
              </Typography>
              <Typography fontSize={"1.1rem"}>
                <FaTiktok /> Tiktok
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default Socialmedia;
