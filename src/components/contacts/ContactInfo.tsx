import { Box, Stack, Typography, Button } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <>
      <Box m={"3rem"}>
        <Stack ml={"5rem"}></Stack>
        <Box sx={{ display: "flex", gap: "3rem" }}>
          <Stack
            borderRadius={".6rem"}
            pl={"1rem"}
            spacing={2}
            height={"16rem"}
            width={"50%"}
            sx={{
              backgroundImage: "url(/images/contact.jpg)",
              borderRadius: ".6rem",
              backgroundSize: "cover",
            }}
            mt={"1.5rem"}
          >
            <Typography variant="h6">Our contact Information</Typography>
            <Typography fontSize={"1rem"}>
              <MdCall /> 0712345678
            </Typography>
            <Typography fontSize={"1rem"}>
              <MdMarkEmailRead /> zaphtours@gmail.com
            </Typography>
            <Typography fontSize={"1rem"}>
              <FaLocationDot /> Muranga Town, next to Magunas Supermarket
            </Typography>
            <Stack direction={"row"} gap={"10rem"}>
              <Stack pb={"1rem"} spacing={1}>
                <Button
                  target="_blank"
                  variant="outlined"
                  component={"a"}
                  href="https://github.com/tasha-lab/Zaph-Tours.git"
                  sx={{ fontSize: ".9rem", color: "text.primary" }}
                >
                  {" "}
                  <FaInstagram /> Instagram
                </Button>
                <Button
                  target="_blank"
                  variant="outlined"
                  component={"a"}
                  href="https://github.com/tasha-lab/Zaph-Tours.git"
                  sx={{ fontSize: ".9rem", color: "text.primary" }}
                >
                  {" "}
                  <FaLinkedin /> LinkedIn
                </Button>
              </Stack>
              <Stack spacing={1}>
                <Button
                  target="_blank"
                  variant="outlined"
                  component={"a"}
                  href="https://github.com/tasha-lab/Zaph-Tours.git"
                  sx={{ fontSize: ".9rem", color: "text.primary" }}
                >
                  {" "}
                  <FaFacebookF /> Facebook
                </Button>
                <Button
                  target="_blank"
                  variant="outlined"
                  component={"a"}
                  href="https://github.com/tasha-lab/Zaph-Tours.git"
                  sx={{ fontSize: ".9rem", color: "text.primary" }}
                >
                  {" "}
                  <FaTiktok /> Tiktok
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            color={"#FFFFFF"}
            width={"50%"}
            p={"1rem 0 1rem 1rem"}
            spacing={3}
            sx={{
              backgroundImage: "url(/images/open.jpg)",
              borderRadius: ".6rem",
              backgroundSize: "cover",
            }}
            mt={"1.5rem"}
          >
            <Typography variant="h6">Opening Hours</Typography>
            <Typography>Monday to Friday: 8:00 AM – 6:00 PM</Typography>
            <Typography>Saturday: 9:00 AM – 4:00 PM</Typography>
            <Typography>Sunday: Closed</Typography>
          </Stack>
        </Box>
      </Box>
      <Box display={"flex"} p={2} justifyContent={"center"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.080171485154!2d37.157683033230555!3d-0.7215706984554113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f49001f33c2fb%3A0xf18cf63c33fd7f40!2sMurang&#39;a%20town!5e0!3m2!1sen!2ske!4v1751558307956!5m2!1sen!2ske"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>
    </>
  );
};

export default ContactInfo;
