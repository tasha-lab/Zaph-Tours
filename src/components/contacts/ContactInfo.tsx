import { Box, Stack, Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

const ContactInfo = () => {
  return (
    <>
      <Box m={"3rem"}>
        <Stack ml={"5rem"}></Stack>
        <Box sx={{ display: "flex", gap: "3rem" }}>
          <Stack
            borderRadius={".6rem"}
            p={"1rem 0 1rem 1rem"}
            spacing={3}
            height={"14rem"}
            width={"50%"}
            bgcolor={"background.default"}
            mt={"1.5rem"}
          >
            <Typography variant="h6">Our contact Information</Typography>
            <Typography fontSize={"1.1rem"}>
              <MdCall /> 0712345678
            </Typography>
            <Typography fontSize={"1.1rem"}>
              <MdMarkEmailRead /> zaphtours@gmail.com
            </Typography>
            <Typography fontSize={"1.1rem"}>
              <FaLocationDot /> Muranga Town, next to Magunas Supermarket
            </Typography>
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
    </>
  );
};

export default ContactInfo;
