import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <>
          <Typography variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 1,
          textDecoration: "underline",
        }}>About us</Typography>
    <Box p={'2rem'} justifyContent={'space-between'} sx={{display:'flex'}}>
      <Stack width={'50%'} height={'20rem'}>
      <Typography variant="body1" fontSize={'1.1rem'}>
        At Zaph Tours, we believe that travel is more than just visiting new
        places—it's about creating unforgettable experiences. Whether you're
        chasing sunsets on a tropical beach, exploring untamed wilderness, or
        immersing yourself in vibrant cultures, our expertly crafted tours are
        designed to match every kind of traveler. Based in Kenya and operating
        globally, we specialize in unique, curated journeys ranging from luxury
        getaways and eco-adventures to cultural expeditions and family-friendly
        escapes. With a passionate team of travel experts and local guides, we
        make your dream trip seamless, enriching, and deeply personal. Let Zaph
        Tours take you beyond the ordinary.
      </Typography>
      </Stack>
      <Stack >
        <Card sx={{ width: "33rem", height: "20rem" }} >
            <CardMedia component={'img'} src="/images/tours.jpg" sx={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        </Card>
      </Stack>
    </Box>
    </>
  );
};

export default About;
